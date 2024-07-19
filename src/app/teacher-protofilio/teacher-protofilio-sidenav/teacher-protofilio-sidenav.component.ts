import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { AccessToJsonService } from '../../shared/service/access-to-json.service';

@Component({
  selector: 'app-teacher-protofilio-sidenav',
  templateUrl: './teacher-protofilio-sidenav.component.html',
  styleUrl: './teacher-protofilio-sidenav.component.css'
})
export class TeacherProtofilioSidenavComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  @Input() teacher: any;
  websiteLinks: any = [];
  teacherId: any;
  constructor(
    public translate: TranslateService, private accessToJsonService: AccessToJsonService) {
  }
  ngOnInit(): void {
    this.getWebsiteLinks();
    this.getTeacherId();
  }
  getWebsiteLinks() {
    this.accessToJsonService.getLinks('assets/jsonFiles/teacher-protofilio-links.json').subscribe(
      (data) => {
        this.websiteLinks = data.filter((ele: { Active: number; }) => ele.Active == 1);
      },
      (error) => {
        console.error('Error fetching JSON data', error);
      }
    );
  }
  getTeacherId() {
    this.teacherId = localStorage.getItem('teacherId');
  }
  @Output() closeSidenav = new EventEmitter<void>();
  onCloseSidenav() {
    this.closeSidenav.emit();
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}