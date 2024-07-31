import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-admin-header',
  standalone: true,
  imports: [TranslateModule, CommonModule,FormsModule,RouterModule],
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.css'
})
export class AdminHeaderComponent {
  sidNavLinks:any=[];
  constructor(public translate: TranslateService) {

  }
  onLinkClick(e:any){

  }
  toggleLanguage() {

  }
  switchTheme() {

  }

  gotoAdminLogout() {

  }
  gotoIamTeacherWebsite() {

  }
}
