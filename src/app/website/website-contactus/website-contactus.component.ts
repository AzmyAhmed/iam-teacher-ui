import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Meta } from '@angular/platform-browser';
import { Iapp_Sections_Data } from '../../shared/service/app-sections-data.service';
import { IWebsite_Sections_Data, WebsiteSectionsDataService } from '../website-sections-data.service';
import { Subject, takeUntil } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Website_ContactUs, WebsiteContactusService } from './website-contactus.service';
import { SnackBarService } from '../../shared/service/snack-bar.service';
import { ModalComponent } from '../../shared/component/modal/modal.component';
@Component({
  selector: 'app-website-contactus',
  templateUrl: './website-contactus.component.html',
  styleUrl: './website-contactus.component.css'
})
export class WebsiteContactusComponent {
  @Input() websiteSectionsDataResult: any[] = [];
  emailForm!: FormGroup;
  contactUsSerial: number = 0;
  adminLink: any = {};
  constructor(private contactService: WebsiteContactusService, private snackBar: SnackBarService,
    private fb: FormBuilder, private meta: Meta, public translate: TranslateService, private _WebsiteSectionsDataService: WebsiteSectionsDataService) {
    if (this.websiteSectionsDataResult.length == 0) {
      this.Website_Sections_DataLoad();
    }
    this.createForm();
    this.getLinkFromAdmin();
  }
  getLinkFromAdmin() {
    const link = sessionStorage.getItem("linkFromAdmin");
    this.adminLink = link ? JSON.parse(link) : null;
    console.log("adminLink To  ContactUsObjs = ", this.adminLink);
  }
  websiteSectionsDataObj: IWebsite_Sections_Data = <IWebsite_Sections_Data>{}
  stream: Subject<void> = new Subject();
  Website_Sections_DataLoad() {
    this.ContactUsObj = {};
    this.websiteSectionsDataObj.App_Links_Stp = 9;
    this._WebsiteSectionsDataService.Website_Sections_DataLoad(this.websiteSectionsDataObj)
      .pipe(takeUntil(this.stream))
      .subscribe((res: any) => {
        if (res.azmestic6 && res.azmestic6.length > 0) {
          this.websiteSectionsDataResult = res.azmestic6;
          this.ContactUsObj = this.websiteSectionsDataResult[0];
        }
      }
        ,
        error => {
        }

      );
  }
  ngOnInit(): void {
    this.metaDescription();
  }

  metaDescription() {
    this.meta.updateTag({ name: 'description', content: 'azmy ahmed software engineer' });
  }



  createForm() {
    this.emailForm = this.fb.group({
      Serial: [-1],
      FullName: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Address: ['', Validators.required],
      PhoneNumber: ['', [
        Validators.required,
        Validators.pattern(/^(?:\+20|0)[1-9]\d{9}$/) // Egyptian phone number pattern
      ]],
      Message: ['', Validators.required]
    });
  }

  sendWebsite_ContactUs(): void {
    let contactObj: any = this.emailForm.value;
    contactObj.Serial = -1;
    if (this.emailForm.valid) {
      this.contactService.Website_ContactUsSave(contactObj).subscribe({
        next: (response) => {
          // Handle successful response
          if (response.azmestic1 && response.azmestic1.length > 0) {
            //this.contactUsSerial = +response.azmestic1[0].Website_ContactUsSerial;
            this.snackBar.showSucessSnackBar('We received your message and will contact you soon.', 'CLOSE'); // Display success message
          }
          this.emailForm.reset(); // Optionally reset the form
          contactObj = {};
        },
        error: (error) => {
          // Handle error response
          this.snackBar.showDbErrorSnackBar('An error occurred. Please try again later.', "ALERT"); // Display error message
        }
      });
    } else {
      this.snackBar.showWarnSnackBar('Please fill out all required fields correctly.', 'WARN'); // Optional: Display a warning if form is invalid
    }

  }
  targetComponent: string = '';
  componentTitle: string = '';
  @ViewChild(ModalComponent) modal!: ModalComponent;
  @ViewChild('modalTemplate') modalTemplate!: TemplateRef<any>;
  openModalTemplate(targetComponent: string, componentTitle: string) {
    this.targetComponent = targetComponent;
    this.componentTitle = componentTitle;
    if (this.modal) {
      this.modal.content = this.modalTemplate;
      this.modal.open();
    } else {
      console.error(' Modal component is not available');
    }
  }
  ContactUsObj: any = {};
  onAddContactUs() {
    this.ContactUsObj = {};
    this.ContactUsObj.Serial = -1;
    this.ContactUsObj.ReturnCode = 20;
    this.ContactUsObj.App_Links_Stp = 9;
  }
  onEditContactUs() {
    this.ContactUsObj.ReturnCode = 30;
  }
  onDeleteContactUs() {
    this.ContactUsObj.ReturnCode = 40;

  }
  onConfirmContactUs() {
    if (this.ContactUsObj) {
      this.ContactUsObj.IsActive = this.ContactUsObj.IsActive ? 1 : 0;
      this.ContactUsObj.DefaultStp = this.ContactUsObj.DefaultStp ? 1 : 0;
      this._WebsiteSectionsDataService.Website_ContactUs_DataSave(this.ContactUsObj)
        .pipe(takeUntil(this.stream))
        .subscribe({
          next: (value) => {
            if (value.azmestic1.length > 0) {
              // Assuming value is an array
              this.Website_Sections_DataLoad();
              this.snackBar.showDbSucessSnackBar("SUCCESS", "ALERT")
              this.modal.close();
              this.ContactUsObj = {};
            }

          },
          error: (err) => this.snackBar.showDbErrorSnackBar("ERROR", "ALERT")
          ,
          complete: () => {

          }

        });
    }

  }
}
