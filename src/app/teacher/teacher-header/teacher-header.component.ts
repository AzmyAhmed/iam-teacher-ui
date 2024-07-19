import { Component, EventEmitter, OnDestroy, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { AccessToJsonService } from '../../shared/service/access-to-json.service';
import { ThemeService } from '../../shared/service/theme.service';
import { Router } from '@angular/router';
import { TeacherProtofilioTeacheridService } from '../../teacher-protofilio/services/teacher-protofilio-teacherid.service';
import { TeacherAuthService } from '../services/teacher-auth.service';
import { ModalComponent } from '../../shared/component/modal/modal.component';

@Component({
  selector: 'app-teacher-header',
  templateUrl: './teacher-header.component.html',
  styleUrl: './teacher-header.component.css'
})
export class TeacherHeaderComponent implements OnInit, OnDestroy {
  collapsed: boolean = false;
  screenWidth: number = 0;
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  toggleLangBtn: boolean = false;
  toggleModeBtn: boolean = false;
  headerLang!: number;
  currentLang: string = 'en';
  isDarkTheme = false;
  class: string = 'sidenavs'
  showOpenCloseIconFlag: boolean = true;
  teacherId: any;
  userData: any = {}
  websiteLinks: any = []
  constructor(
    private themeService: ThemeService, public translate: TranslateService,
    private router: Router, private authService: TeacherAuthService) {
    this.translate.setDefaultLang(this.currentLang);
    this.getTeacherId();
  }
  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
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


  openModal() {

  }
  logoutFromIamTeacher() {
    this.authService.logout();
    this.router.navigate(['/teacher-protofilio/teacher-protofilio-landingpage/', this.teacherId]);
  }
  getTeacherId() {
    this.teacherId = localStorage.getItem('teacherId');
    console.log(" iam teacher teacherId = ", this.teacherId)

  }
  gotoIamTeacherWebsite() {
    this.router.navigate(['/website/website-landingpage'])
  }
  gotoTeacherWebsite() {
    this.router.navigate(['/teacher-protofilio/teacher-protofilio-landingpage/', this.teacherId]);
  }
  @Output() toggleSidenav = new EventEmitter<void>();
  onToggleSidenav() {
    this.toggleSidenav.emit();
  }
  //Sof  Modal Area =====================================18-7-2024 Azmestic============================
  @ViewChild(ModalComponent) modal!: ModalComponent;
  @ViewChild('modalTemplate') modalTemplate!: TemplateRef<any>;
  targetComponent: string = '';
  componentTitle: string = '';
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
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}


