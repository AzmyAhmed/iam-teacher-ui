import { Component, ViewChild } from '@angular/core';
import { FormsComponent } from "../../shared/component/forms/forms.component";
import { CommonModule } from '@angular/common';
import { WebsiteDemoConfirmationComponent } from "../website-demo-confirmation/website-demo-confirmation.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Website_BookDemo, WebsiteBookdemoService } from './website-bookdemo.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { SnackBarService } from '../../shared/service/snack-bar.service';

@Component({
  selector: 'app-website-bookdemo',
  standalone: true,
  imports: [FormsComponent, CommonModule, FormsModule, WebsiteDemoConfirmationComponent, TranslateModule],
  templateUrl: './website-bookdemo.component.html',
  styleUrl: './website-bookdemo.component.css'
})
export class WebsiteBookdemoComponent {
  showFormFalg: number = 1;
  selectedValue: number = 1;
  @ViewChild(FormsComponent) dynamicForm!: FormsComponent;
  websiteBookDemoObj: Website_BookDemo = <Website_BookDemo>{};
  stream: Subject<void> = new Subject();
  options: any = [
    {
      "Serial": 1,
      "NameEn": "Teacher",
      "NameAr": "معلم"
    },
    {
      "Serial": 4,
      "NameEn": "Center",
      "NameAr": "سنتر  تعليمي"
    },
    {
      "Serial": 5,
      "NameEn": "School",
      "NameAr": "مدرسة"
    },
    {
      "Serial": 6,
      "NameEn": "Kinder",
      "NameAr": "حضانة"

    }]
  constructor(public translate: TranslateService, private _snack: SnackBarService, private demoSer: WebsiteBookdemoService) { }
  handleFormSubmit(formData: any): void {
    console.log('Form Data:', formData);
    // Handle the form data, e.g., send it to the server
  }
  teacherBookDemo(): void {
    this.dynamicForm.submitForm();
    this.websiteBookDemoObj = this.dynamicForm.form.value;
    this.websiteBookDemoObj.IsExpectedCLient = 0;
    this.websiteBookDemoObj.Serial = -1;
    this.websiteBookDemoObj.ReturnCode = 20; // for insert
    this.websiteBookDemoObj.UserTypeSerial = this.selectedValue
    if (this.websiteBookDemoObj.PhoneNumber == "" || this.websiteBookDemoObj.FullName == "") {
      this._snack.showErrorSnackBar("PLEASECOMPLETEDATA", 'ALERT');
      return;
    }
    this.demoSer.Website_BookDemoSave(this.websiteBookDemoObj)
      .pipe(takeUntil(this.stream))
      .subscribe({
        next: (value) => {
          // Assuming value is an array
          if (value.azmestic1 && value.azmestic1.length > 0) {
            this.showFormFalg = 0; // Set the flag after processing
          }
        },
        error: (err) => console.error('Error occurred:', err),
        complete: () => console.log('Observable completed')
      });
  }

  onSelectionChange() {
    this.websiteBookDemoObj.UserTypeSerial = this.selectedValue
  }




}

