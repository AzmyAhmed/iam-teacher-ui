import { Component, EventEmitter, Input, input, OnDestroy, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { ThemeService } from '../../service/theme.service';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';
import { TeacherAuthService } from '../../../teacher/services/teacher-auth.service';
import { AccessToJsonService } from '../../service/access-to-json.service';
import { SharedService } from '../../service/shared.service';
import { ToastService } from '../../service/toast.service';
import { HeaderService, ISysLink } from './header.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
  collapsed: boolean = false;
  screenWidth: number = 0;
  private stream: Subject<void> = new Subject<void>();
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
  linkNameAr: string = 'لوحة التحكم'
  linkNameEn: string = 'Dashboard'
  className: string = '';
  sysLinks: ISysLink = <ISysLink>{};
  DevObj: any = {};
  constructor(private _headerSer: HeaderService, private _toaster: ToastService,
    private themeService: ThemeService, private accessToJsonService: AccessToJsonService,
    public translate: TranslateService, private router: Router, private authService: TeacherAuthService, private sharedService: SharedService) {
    this.translate.setDefaultLang(this.currentLang);
  }
  ngOnInit(): void {
    this.getSidNavLinks();
    this.getDevFlag();
  }
  getDevFlag() {
    this.accessToJsonService.getLinks("assets/jsonFiles/Development/dev.json").subscribe(
      (data) => {
        this.DevObj = data[0];
        console.log("Admin Is Active = ", this.DevObj)
      },
      (error) => {
        console.error('Error fetching JSON data', error);
      }
    );
  }



  getSidNavLinks() {
    if (this.fromModule) {
      this.sysLinks.Module = this.fromModule;
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
            this._toaster.activateRequestError(error.Value)
          }

        );
    }

    // this.accessToJsonService.getLinks(this.fromJson).subscribe(
    //   (data) => {
    //     this.sidNavLinks = data.filter((ele: { IsActive: number; }) => ele.IsActive == 1);
    //   },
    //   (error) => {
    //     console.error('Error fetching JSON data', error);
    //   }
    // );
  }

  onLinkClick(link: { Serial: number, NameAr: string, NameEn: string, ClassName: string }) {
    this.sharedService.changeLinkData(link.Serial, link.NameAr, link.NameEn, link.ClassName);
    this.linkNameAr = link.NameAr;
    this.linkNameEn = link.NameEn;
    this.className = link.ClassName;
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
    if (this.fromModule != 'teacher') {
      this.router.navigate(['/website/website-landingpage'])
    }
  }
  goToWebsite() {
    this.router.navigate(['/website/website-landingpage'])
  }
  goTeacherProtofilio() {
    this.router.navigate(['/teacher-protofilio/teacher-protofilio-landingpage/1'])
  }
  teacherSignup() {
    this.headerIsHiddenFlag = true;
    this.router.navigate(['/website/website-signup'])
  }
  gotoAdminLogin() {

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
    this.router.navigate(['/teacher-protofilio/teacher-protofilio-login']);
  }
  // teacher area
  logoutFromIamTeacher() {
    this.authService.logout();
    this._toaster.toastMsg("U Are Logged Out ", "Log Out", "Warn")
    this.router.navigate(['/teacher-protofilio/teacher-protofilio-landingpage/', 1]);
  }
  refreshTeacherApp() {
    this.router.navigate(['/teacher/iamteacher/', 1]);
  }
  ngOnDestroy() {
    this.stream.next();
    this.stream.complete();
  }
}




