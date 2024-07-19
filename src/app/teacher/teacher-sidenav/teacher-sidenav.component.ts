import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { AccessToJsonService } from '../../shared/service/access-to-json.service';

@Component({
  selector: 'app-teacher-sidenav',
  templateUrl: './teacher-sidenav.component.html',
  styleUrl: './teacher-sidenav.component.css'
})
export class TeacherSidenavComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  websiteLinks: any = [];
  constructor(
    public translate: TranslateService, private accessToJsonService: AccessToJsonService) {
  }
  ngOnInit(): void {
    this.getWebsiteLinks();
  }
  getWebsiteLinks() {
    this.accessToJsonService.getLinks('assets/jsonFiles/teacher-links.json').subscribe(
      (data) => {
        this.websiteLinks = data.filter((ele: { Active: number; }) => ele.Active == 1);
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
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}