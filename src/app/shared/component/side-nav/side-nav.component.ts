import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { AccessToJsonService } from '../../service/access-to-json.service';
import { SharedService } from '../../service/shared.service';
import { ThemeService } from '../../service/theme.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  sidNavLinks: any = [];
  @Input() fromModule: string = '';
  @Input() fromJson: string = '';
  constructor(
    public translate: TranslateService, private accessToJsonService: AccessToJsonService,  private themeService: ThemeService,
     private sharedService: SharedService) {
  }
  ngOnInit(): void {
    this.getSidNavLinks();
  }
  getSidNavLinks() {
    this.accessToJsonService.getLinks(this.fromJson).subscribe(
      (data) => {
        this.sidNavLinks = data.filter((ele: { IsActive: number; }) => ele.IsActive == 1);
      },
      (error) => {
        console.error('Error fetching JSON data', error);
      }
    );
  }
  @Output() closeSidenav = new EventEmitter<void>();
  onCloseSidenav() {
    this.closeSidenav.emit();
  }

  onLinkClick(link: { Serial: number, NameAr: string, NameEn: string, ClassName: string }) {
    this.sharedService.changeLinkData(link.Serial, link.NameAr, link.NameEn, link.ClassName);
  }
  currentLang: string = 'en';
  isDarkTheme = false;
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

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}