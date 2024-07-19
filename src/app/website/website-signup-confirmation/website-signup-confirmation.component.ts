import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-website-signup-confirmation',
  templateUrl: './website-signup-confirmation.component.html',
  styleUrl: './website-signup-confirmation.component.css'
})
export class WebsiteSignupConfirmationComponent {
  constructor(public translate: TranslateService, private router: Router) {

  }

  gotoTeacherProtofilio() {
    this.router.navigate(['/teacher-protofilio/teacher-protofilio-landingpage/1'])

  }
}
