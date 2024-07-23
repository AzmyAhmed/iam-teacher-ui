import { Component, EventEmitter, Input, input, OnDestroy, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { ThemeService } from '../../service/theme.service';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';
import { TeacherAuthService } from '../../../teacher/services/teacher-auth.service';
import { AccessToJsonService } from '../../service/access-to-json.service';
import { SharedService } from '../../service/shared.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
  collapsed: boolean = false;
  screenWidth: number = 0;
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  toggleLangBtn: boolean = false;
  toggleModeBtn: boolean = false;
  currentLang: string = 'en';
  isDarkTheme = false;
  userData: any = {}
  @Input() fromModule: string = '';
  @Input() fromJson: string = '';
  sidNavLinks: any = [];
  @ViewChild(ModalComponent) modal!: ModalComponent;
  @ViewChild('modalTemplate') modalTemplate!: TemplateRef<any>;
  targetComponent: string = '';
  componentTitle: string = '';
  sideNavClass: string = 'sidenavs website-sidenav';
  headerIsHiddenFlag: boolean = false;
  constructor(
    private themeService: ThemeService, private accessToJsonService: AccessToJsonService,
    public translate: TranslateService, private router: Router, private authService: TeacherAuthService, private sharedService: SharedService) {
    this.translate.setDefaultLang(this.currentLang);
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
  onLinkClick(link: { Serial: number, NameAr: string, NameEn: string, ClassName: string }) {
    this.sharedService.changeLinkData(link.Serial, link.NameAr, link.NameEn, link.ClassName);
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

  gotoIamTeacherWebsite() {
    this.router.navigate(['/website/website-landingpage'])
  }
  teacherSignup() {
    this.headerIsHiddenFlag = true;
    this.router.navigate(['/website/website-signup'])
  }
  //Sof  Modal Area =====================================18-7-2024 Azmestic============================
  openModalTemplate(targetComponent: string, componentTitle: string) {
    this.targetComponent = targetComponent;
    this.componentTitle = componentTitle;
    if (this.modal) {
      this.modal.content = this.modalTemplate;
      this.modal.open();
    } else {
      console.error(' Modal component is not available');
    }
  }
  //Eof  Modal Area =====================================18-7-2024 Azmestic============================
  onOpenSideNav() {
    this.sideNavClass = 'sidenavs  website-sidenav sidenavsopen'

  }
  onCloseSidenav() {
    this.sideNavClass = 'sidenavs website-sidenav'

  }
  // login area
  teacherProtofilioLogin(teacher_id: any) {
    this.router.navigate(['/teacher-protofilio/teacher-protofilio-login', teacher_id]);
  }
  // teacher area
  logoutFromIamTeacher() {
    this.authService.logout();
    this.router.navigate(['/teacher-protofilio/teacher-protofilio-landingpage/', 1]);
  }
  refreshTeacherApp() {
    this.router.navigate(['/teacher/iamteacher/', 1]);
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}




