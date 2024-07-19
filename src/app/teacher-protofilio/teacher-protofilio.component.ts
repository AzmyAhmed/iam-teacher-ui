import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { ThemeService } from '../shared/service/theme.service';

@Component({
  selector: 'app-teacher-protofilio',
  templateUrl: './teacher-protofilio.component.html',
  styleUrl: './teacher-protofilio.component.css'
})
export class TeacherProtofilioComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  screenWidth: number = 0;
  teacherId: any;
  constructor(
    private themeService: ThemeService, public translate: TranslateService, private route: ActivatedRoute) {
    this.screenWidth = window.innerWidth;
  }
  ngOnInit(): void {
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
