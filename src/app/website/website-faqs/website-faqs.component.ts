import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { WebsiteBookdemoComponent } from "../website-bookdemo/website-bookdemo.component";
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Iapp_Sections_Data } from '../../shared/service/app-sections-data.service';
import { Subject, takeUntil } from 'rxjs';
import { WebsiteSectionsDataService } from '../website-sections-data.service';
import { ModalComponent } from '../../shared/component/modal/modal.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsComponent } from "../../shared/component/forms/forms.component";
import { WebsiteFaqsService } from './website-faqs.service';
import { SnackBarService } from '../../shared/service/snack-bar.service';
interface FAQ {
  question: string;
  answer: string;
  manager: string;
}
@Component({
  selector: 'app-website-faqs',
  standalone: true,
  imports: [CommonModule, TranslateModule, SharedModule, FormsComponent],
  templateUrl: './website-faqs.component.html',
  styleUrl: './website-faqs.component.css'
})
export class WebsiteFaqsComponent {
  @Input() websiteSectionsDataResult: any[] = []
  stream: Subject<void> = new Subject();
  constructor(private snackBar: SnackBarService, private _faqs: WebsiteFaqsService, public translate: TranslateService, private _WebsiteSectionsDataService: WebsiteSectionsDataService) {
    if (this.websiteSectionsDataResult.length == 0) {
      this.Website_Sections_DataLoad();
    }

  }
  websiteSectionsDataObj: Iapp_Sections_Data = <Iapp_Sections_Data>{}
  Website_Sections_DataLoad() {
    this.websiteSectionsDataObj.App_Links_Stp = 33;
    this._WebsiteSectionsDataService.Website_Sections_DataLoad(this.websiteSectionsDataObj)
      .pipe(takeUntil(this.stream))
      .subscribe((res: any) => {
        if (res.azmestic9 && res.azmestic9.length > 0) {
          this.websiteSectionsDataResult = res.azmestic9;
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
            //this.contactUsSerial = +response.azmestic1[0].Website_ContactUsSerial;
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
}

