import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { ThemeService } from '../../shared/service/theme.service';
import { TeacherProtofilioTeacheridService } from '../services/teacher-protofilio-teacherid.service';

@Component({
  selector: 'app-teacher-protofilio-landingpage',
  templateUrl: './teacher-protofilio-landingpage.component.html',
  styleUrl: './teacher-protofilio-landingpage.component.css'
})
export class TeacherProtofilioLandingpageComponent implements OnInit, OnDestroy {
  screenWidth: number = 0;
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  teacherId: any;
  constructor(public translate: TranslateService, private route: ActivatedRoute, private teacher_idService: TeacherProtofilioTeacheridService) {
    this.screenWidth = window.innerWidth;
    this.setTeacherId();
  }
  sendEmail(e: any) {

  }
  ngOnInit(): void {
  }
  setTeacherId() {
    this.route.paramMap.subscribe(params => {
      this.teacherId = params.get('id');
      this.teacher_idService.updateUserId(this.teacherId);
      console.log("landing page teacherId = ", this.teacherId);
    });
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
