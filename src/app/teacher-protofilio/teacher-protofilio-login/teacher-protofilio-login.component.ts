import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TeacherAuthService } from '../../teacher/services/teacher-auth.service';

@Component({
  selector: 'app-teacher-protofilio-login',
  standalone: true,
  imports: [],
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
  teacherLoginToIamTeacherApp() {
    this.authService.login();
    this.router.navigate(['/teacher/iamteacher/' + this.teacherId])
  }

}
