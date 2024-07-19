import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TeacherAuthService } from '../../teacher/services/teacher-auth.service';
import { FormsComponent } from "../../shared/component/forms/forms.component";

@Component({
  selector: 'app-teacher-protofilio-login',
  standalone: true,
  imports: [FormsComponent],
  templateUrl: './teacher-protofilio-login.component.html',
  styleUrl: './teacher-protofilio-login.component.css'
})
export class TeacherProtofilioLoginComponent {
  teacherId: any;
  constructor(
    public translate: TranslateService, private router: Router, private authService: TeacherAuthService) {
    this.teacherId = localStorage.getItem('teacherId');
    if (!this.teacherId) {
      this.teacherId = 1;
    }
  }

  // form area
  @ViewChild(FormsComponent) dynamicForm!: FormsComponent;
  handleFormSubmit(formData: any): void {
    console.log('Form Data:', formData);
    // Handle the form data, e.g., send it to the server
  }

  teacherLoginToIamTeacherApp() {
    this.dynamicForm.submitForm();
    this.authService.login();
    this.router.navigate(['/teacher/iamteacher/' + this.teacherId])
  }

}
