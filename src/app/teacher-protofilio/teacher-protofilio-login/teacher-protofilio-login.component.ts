import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TeacherAuthService } from '../../teacher/services/teacher-auth.service';
import { FormsComponent } from "../../shared/component/forms/forms.component";
import { CommonModule } from '@angular/common';
import { AccessToJsonService } from '../../shared/service/access-to-json.service';
import { ToastService } from '../../shared/service/toast.service';

@Component({
  selector: 'app-teacher-protofilio-login',
  standalone: true,
  imports: [FormsComponent, CommonModule],
  providers:[ToastService],
  templateUrl: './teacher-protofilio-login.component.html',
  styleUrl: './teacher-protofilio-login.component.css'
})
export class TeacherProtofilioLoginComponent {
  teacherId: any;
  options: any = []
  constructor(private _toaster: ToastService,
    public translate: TranslateService, private accessToJsonService: AccessToJsonService, private router: Router, private authService: TeacherAuthService) {
    this.teacherId = localStorage.getItem('teacherId');
    if (!this.teacherId) {
      this.teacherId = 1;
    }
    this.getUserTypes();
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
    this._toaster.toastMsg("U Are Logged In Suceesfully ","Log In" , "Success")
    this.router.navigate(['/teacher/iamteacher/' + this.teacherId])
  }
  fromJson: string = 'assets/jsonFiles/userTypeStp.json'
  getUserTypes() {
    this.accessToJsonService.getLinks(this.fromJson).subscribe(
      (data) => {
        this.options = data.filter((ele: { IsActive: number; }) => ele.IsActive == 1);
      },
      (error) => {
        console.error('Error fetching JSON data', error);
      }
    );
  }
}
