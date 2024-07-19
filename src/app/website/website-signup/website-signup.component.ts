import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from '../../shared/service/theme.service';
import { FormsComponent } from '../../shared/component/forms/forms.component';

@Component({
  selector: 'app-website-signup',
  templateUrl: './website-signup.component.html',
  styleUrl: './website-signup.component.css'
})
export class WebsiteSignupComponent {
  teacherId: any;
  constructor(
    public translate: TranslateService, private router: Router) {
    this.teacherId = localStorage.getItem('teacherId');
    if (!this.teacherId) {
      this.teacherId = 1;
    }
  }
  @ViewChild(FormsComponent) dynamicForm!: FormsComponent;
  handleFormSubmit(formData: any): void {
    console.log('Form Data:', formData);
    // Handle the form data, e.g., send it to the server
  }
  confirmTeacherSignUp(): void {
    this.dynamicForm.submitForm();
    this.router.navigate(['/teacher-protofilio/teacher-protofilio-landingpage/' + this.teacherId])

  }
}
