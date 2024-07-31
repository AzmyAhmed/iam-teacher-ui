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

@Component({
  selector: 'app-admin-header',
  standalone: true,
  imports: [TranslateModule, CommonModule, FormsModule, RouterModule],
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.css'
})
export class AdminHeaderComponent {
  sidNavLinks: any = [];
  currentLang: string = 'en';
  constructor(private _headerSer: HeaderService, private snack: SnackBarService, public translate: TranslateService, private router: Router, private authService: AdminAuthService, private route: RouterModule, private themeService: ThemeService) {
    this.getLinks('website')
  }
  onLinkClick(e: any) {

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
    this.authService.logout();
    this.snack.showWarnSnackBar("LOGOUT", 'LOGOUT');
    this.router.navigate(['/admin/admin-login']);
  }
  gotoIamTeacherWebsite() {
    this.router.navigate(['/website/website-landingpage']);

  }
  sysLinks: any = {};
  stream: Subject<void> = new Subject();
  getLinks(module: string) {
    if (module) {
      this.sysLinks.Module = module;
      this._headerSer.sysLinksLoad(this.sysLinks)
        .pipe(takeUntil(this.stream))
        .subscribe((res: any) => {
          if (res.azmestic1 && res.azmestic1.length > 0) {
            // this.dbResponse = res.Value.Table[0];
            this.sidNavLinks = res.azmestic1;
          }
        }
          ,
          error => {
            this.snack.showDbErrorSnackBar(error.Value, 'LOGOUT');

          }

        );
    }

  }

}
