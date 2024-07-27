import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { TrackingService } from '../../shared/service/tracking.service';

@Component({
  selector: 'app-website-landingpage',
  templateUrl: './website-landingpage.component.html',
  styleUrl: './website-landingpage.component.css'
})
export class WebsiteLandingpageComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  isButtonVisible = false;
  visitId!: number;
  constructor(private trackingService: TrackingService) { }

  ngOnInit(): void {
    this.trackingService.App_Tracking_VisitsSave().subscribe((response: any) => {
      this.visitId = response.visitId;
    });
  }

  @HostListener('window:beforeunload', ['$event'])
  unloadHandler(event: Event) {
    this.trackingService.App_Tracking_LeavesSave(this.visitId);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }



}
