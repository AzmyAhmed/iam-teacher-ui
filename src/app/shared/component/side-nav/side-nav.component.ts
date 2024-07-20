import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { AccessToJsonService } from '../../service/access-to-json.service';
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
    public translate: TranslateService, private accessToJsonService: AccessToJsonService) {
  }
  ngOnInit(): void {
    this.getSidNavLinks();
  }
  getSidNavLinks() {
    this.accessToJsonService.getLinks(this.fromJson).subscribe(
      (data) => {
        this.sidNavLinks = data.filter((ele: { Active: number; }) => ele.Active == 1);
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