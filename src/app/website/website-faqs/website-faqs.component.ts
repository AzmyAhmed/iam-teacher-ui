import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { WebsiteBookdemoComponent } from "../website-bookdemo/website-bookdemo.component";
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import { IWebsite_Sections_Data, WebsiteSectionsDataService } from '../website-sections-data.service';
import { ModalComponent } from '../../shared/component/modal/modal.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsComponent } from "../../shared/component/forms/forms.component";
import { WebsiteFaqsService } from './website-faqs.service';
import { SnackBarService } from '../../shared/service/snack-bar.service';
import { FormsModule } from '@angular/forms';
interface FAQ {
  question: string;
  answer: string;
  manager: string;
}
@Component({
  selector: 'app-website-faqs',
  standalone: true,
  imports: [CommonModule, TranslateModule, FormsModule, SharedModule, FormsComponent],
  templateUrl: './website-faqs.component.html',
  styleUrl: './website-faqs.component.css'
})
export class WebsiteFaqsComponent {
  @Input() websiteSectionsDataResult: any[] = []
  stream: Subject<void> = new Subject();
  constructor(private snackBar: SnackBarService, private _faqs: WebsiteFaqsService,
    public translate: TranslateService, private _WebsiteSectionsDataService: WebsiteSectionsDataService) {
    if (this.websiteSectionsDataResult.length == 0) {
      this.Website_Sections_DataLoad();
    }

    this.getLinkFromAdmin();
  }
  adminLink: any = {};
  getLinkFromAdmin() {
    const link = sessionStorage.getItem("linkFromAdmin");
    this.adminLink = link ? JSON.parse(link) : null;
    console.log("adminLink To  FaqsObjs = ", this.adminLink);
  }
  websiteSectionsDataObj: IWebsite_Sections_Data = <IWebsite_Sections_Data>{}
  Website_Sections_DataLoad() {
    this.FaqsObj = {};
    this.websiteSectionsDataObj.App_Links_Stp = 33;
    this._WebsiteSectionsDataService.Website_Sections_DataLoad(this.websiteSectionsDataObj)
      .pipe(takeUntil(this.stream))
      .subscribe((res: any) => {
        if (res.azmestic9 && res.azmestic9.length > 0) {
          this.websiteSectionsDataResult = res.azmestic9;
          this.FaqsObj = this.websiteSectionsDataResult[0];
        }
      }
        ,
        error => {
        }

      );
  }
  componentTitle: string = ''
  targetComponent: string = '';
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
  @ViewChild(FormsComponent) dynamicForm!: FormsComponent;
  websiteAskQuestion: any;
  handleFormSubmit(formData: any): void {
    console.log('Form Data:', formData);
    // Handle the form data, e.g., send it to the server
  }
  sendQuestion() {
    this.dynamicForm.submitForm();
    this.websiteAskQuestion = this.dynamicForm.form.value;
    this.websiteAskQuestion.Serial = -1;
    if (!this.websiteAskQuestion.Question || this.websiteAskQuestion.Question == '') {
      this.snackBar.showErrorSnackBar("ENTERQUESTION", "ALERT"); // Display error message
      return
    }

    if (this.dynamicForm.form) {
      this._faqs.Website_FaqsSave(this.websiteAskQuestion).subscribe({
        next: (response) => {
          // Handle successful response
          if (response.azmestic1 && response.azmestic1.length > 0) {
            //this.FaqsSerial = +response.azmestic1[0].Website_FaqsSerial;
            this.snackBar.showSucessSnackBar('SUCCESS', 'CLOSE'); // Display success message

          }
          this.dynamicForm.form.reset(); // Optionally reset the form
          this.websiteAskQuestion = {};
        },
        error: (error) => {
          // Handle error response
          this.snackBar.showDbErrorSnackBar('ERROR', "ALERT"); // Display error message
        }
      });
    } else {
      this.snackBar.showWarnSnackBar('FILLREQUIRED', 'WARN'); // Optional: Display a warning if form is invalid
    }

  }
  FaqsObj: any = {};
  onAddFaqs() {
    this.FaqsObj = {};
    this.FaqsObj.Serial = -1;
    this.FaqsObj.ReturnCode = 20;
    this.FaqsObj.App_Links_Stp = 33;
  }
  onEditFaqs(faq: any) {
    this.FaqsObj = faq;
    this.FaqsObj.ReturnCode = 30;
  }
  onDeleteFaqs(faq: any) {
    this.FaqsObj = faq;
    this.FaqsObj.ReturnCode = 40;
  }
  onConfirmFaqs() {
    if (this.FaqsObj) {
      this.FaqsObj.IsActive = this.FaqsObj.IsActive ? 1 : 0;
      this.FaqsObj.DefaultStp = this.FaqsObj.DefaultStp ? 1 : 0;
      this._WebsiteSectionsDataService.Website_Faqs_DataSave(this.FaqsObj)
        .pipe(takeUntil(this.stream))
        .subscribe({
          next: (value) => {
            if (value.azmestic1.length > 0) {
              // Assuming value is an array
              this.Website_Sections_DataLoad();
              this.snackBar.showDbSucessSnackBar("SUCCESS", "ALERT")
              this.modal.close();
              this.FaqsObj = {};
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

