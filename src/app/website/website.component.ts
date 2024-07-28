import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { WebsiteTrackingVisitsService } from './services/website-tracking-visits.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrl: './website.component.css'
})
export class WebsiteComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  isButtonVisible = false;
  visitId!: number;
  fromJson: string = 'assets/jsonFiles/website-links.json';
  fromModule: string = 'website';
  constructor(private website_TrackingService: WebsiteTrackingVisitsService) {
    this.trackVisit();
  }
  ngOnInit(): void {

  }

  trackVisit() {
    this.website_TrackingService.Website_Tracking_VisitsSave().subscribe((response: any) => {
      this.visitId = response.visitId;
    });
  }
  @HostListener('window:beforeunload', ['$event'])
  unloadHandler(event: Event) {
    this.website_TrackingService.Website_Tracking_LeavesSave(this.visitId);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
