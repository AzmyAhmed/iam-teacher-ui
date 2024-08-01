import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ThemeService } from '../../shared/service/theme.service';
import { AdminAuthService } from '../services/admin-auth.service';
import { SnackBarService } from '../../shared/service/snack-bar.service';
import { HeaderService } from '../../shared/component/header/header.service';
import { Subject, takeUntil } from 'rxjs';
import { AdminHeaderService } from './admin-header.service';

@Component({
  selector: 'app-admin-header',
  standalone: true,
  imports: [TranslateModule, CommonModule, FormsModule, RouterModule],
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.css',

})
export class AdminHeaderComponent {
  sidNavLinks: any = [];
  currentLang: string = 'en';
  activeLink: string = 'website';
  constructor(private _headerSer: HeaderService, private adminHeaderSer: AdminHeaderService, private snack: SnackBarService, public translate: TranslateService, private router: Router, private authService: AdminAuthService, private route: RouterModule, private themeService: ThemeService) {
    this.getLinks('website');
    this.translate.use('en')
  }
  onLinkClick(link: any) {
    sessionStorage.setItem("linkFromAdmin", JSON.stringify(link));
  }
  toggleLanguage() {
    this.currentLang = this.currentLang === 'en' ? 'ar' : 'en';
    this.translate.use(this.currentLang);
    this.updateDirection();
  }
  updateDirection() {
    const htmlTag = document.documentElement;
    if (this.currentLang === 'ar') {
      htmlTag.setAttribute('dir', 'rtl');
      htmlTag.setAttribute('lang', 'ar');
    } else {
      htmlTag.setAttribute('dir', 'ltr');
      htmlTag.setAttribute('lang', 'en');
    }
  }
  switchTheme() {
    const isDarkTheme = localStorage.getItem('isDarkTheme') === 'true';
    this.themeService.toggleTheme(!isDarkTheme);
  }


  gotoAdminLogout() {
    sessionStorage.removeItem("linkFromAdmin")
    this.authService.logout();
    this.snack.showWarnSnackBar("LOGOUT", 'LOGOUT');
    this.router.navigate(['/admin/admin-login']);
  }
  gotoIamTeacherWebsite() {
    sessionStorage.removeItem("linkFromAdmin")
    this.router.navigate(['/website/website-landingpage']);


  }
  sysLinks: any = {};
  stream: Subject<void> = new Subject();
  getLinks(module: string) {
    if (module) {
      this.activeLink = module;
      this.sidNavLinks = [];
      this.sysLinks.Module = module;
      this._headerSer.sysLinksLoad(this.sysLinks)
        .pipe(takeUntil(this.stream))
        .subscribe((res: any) => {
          if (res.azmestic2 && res.azmestic2.length > 0) {
            // this.dbResponse = res.Value.Table[0];
            this.sidNavLinks = res.azmestic2;
          }
        }
          ,
          error => {
            this.snack.showDbErrorSnackBar(error.Value, 'LOGOUT');

          }

        );
    }

  }
  showSideNavFlag: boolean = false;
  toggleSidNav() {
    this.showSideNavFlag = !this.showSideNavFlag
  }
}
