import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { AdminFormsComponent } from "../admin-forms/admin-forms.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SnackBarService } from '../../shared/service/snack-bar.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AdminAuthService } from '../services/admin-auth.service';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, AdminFormsComponent, TranslateModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  adminObj: any = {};
  @ViewChild(AdminFormsComponent) dynamicForm!: AdminFormsComponent;
  constructor(public translate: TranslateService, private authService: AdminAuthService, private snack: SnackBarService, private router: Router) {
      this.translate.use('en')
    if (sessionStorage.getItem("admin")) {
      const adminString = sessionStorage.getItem("admin");
      this.adminObj = adminString ? JSON.parse(adminString) : null;
    }

  }
  handleFormSubmit(formData: any): void {
    console.log('Form Data:', formData);
    // Handle the form data, e.g., send it to the server
  }

  adminLogin() {
    this.dynamicForm.submitForm();
    let formObj = this.dynamicForm.form.value;
    if (formObj.UserName != this.adminObj.UserName) {
      this.snack.showErrorSnackBar("USERNAMEINCORRECT", 'WARN');
      return
    }
    if (formObj.Password != this.adminObj.Password) {
      this.snack.showErrorSnackBar("PASSWORDINCORRECT", 'WARN');
      return
    }
    // Your login logic here
    const token = 'sample-token'; // Get token from API
    this.authService.login(token);
    this.router.navigate(['/admin/admin-main/website-first-content']);
    this.snack.showSucessSnackBar("LOGIN", 'LOGIN');

  }
  gotoIamTeacherWebsite() {
    this.router.navigate(['/website/website-landingpage']);

  }

}
