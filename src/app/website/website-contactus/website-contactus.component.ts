import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Meta } from '@angular/platform-browser';
import { Iapp_Sections_Data } from '../../shared/service/app-sections-data.service';
import { WebsiteSectionsDataService } from '../website-sections-data.service';
import { Subject, takeUntil } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Website_ContactUs, WebsiteContactusService } from './website-contactus.service';
import { SnackBarService } from '../../shared/service/snack-bar.service';
@Component({
  selector: 'app-website-contactus',
  templateUrl: './website-contactus.component.html',
  styleUrl: './website-contactus.component.css'
})
export class WebsiteContactusComponent {
  @Input() websiteSectionsDataResult: any[] = [];
  emailForm!: FormGroup;
  contactUsSerial: number = 0;
  constructor(private contactService: WebsiteContactusService, private snackBar: SnackBarService,
    private fb: FormBuilder, private meta: Meta, public translate: TranslateService, private _WebsiteSectionsDataService: WebsiteSectionsDataService) {
    if (this.websiteSectionsDataResult.length == 0) {
      this.Website_Sections_DataLoad();
    }
    this.createForm();
  }
  websiteSectionsDataObj: Iapp_Sections_Data = <Iapp_Sections_Data>{}
  stream: Subject<void> = new Subject();
  Website_Sections_DataLoad() {
    this.websiteSectionsDataObj.App_Links_Stp = 9;
    this._WebsiteSectionsDataService.Website_Sections_DataLoad(this.websiteSectionsDataObj)
      .pipe(takeUntil(this.stream))
      .subscribe((res: any) => {
        if (res.azmestic6 && res.azmestic6.length > 0) {
          this.websiteSectionsDataResult = res.azmestic6;
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
}
