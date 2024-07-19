import { Component, EventEmitter, OnDestroy, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { ThemeService } from '../../shared/service/theme.service';
import { TeacherProtofilioSidenavComponent } from "../teacher-protofilio-sidenav/teacher-protofilio-sidenav.component";
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherProtofilioTeacheridService } from '../services/teacher-protofilio-teacherid.service';
import { ModalComponent } from '../../shared/component/modal/modal.component';

@Component({
  selector: 'app-teacher-protofilio-header',
  templateUrl: './teacher-protofilio-header.component.html',
  styleUrl: './teacher-protofilio-header.component.css'
})
export class TeacherProtofilioHeaderComponent implements OnInit, OnDestroy {
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
  constructor(
    private themeService: ThemeService, public translate: TranslateService, private router: Router,
    private route: ActivatedRoute, private teacher_idService: TeacherProtofilioTeacheridService) {
    this.translate.setDefaultLang(this.currentLang);
    this.screenWidth = window.innerWidth;
    this.getTeacherId();
  }
  ngOnInit(): void {
  }
  getTeacherId() {
    this.teacher_idService.teacherId$.subscribe(teacherId => {
      if (teacherId) {
        //this.getUserName(id);
        this.teacherId = teacherId
        console.log("teacherId from header = ", this.teacherId);

      }
    });
  }
  teacherProtofilioLogin(teacher_id: any) {
    this.router.navigate(['/teacher-protofilio/teacher-protofilio-login', teacher_id]);
  }
  gotoIamTeacherWebsite() {
    this.router.navigate(['/website/website-landingpage'])
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


  userData: any = {}
  openModal() {

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


