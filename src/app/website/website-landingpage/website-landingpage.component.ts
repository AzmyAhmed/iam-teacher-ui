import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { TrackingService } from '../../shared/service/tracking.service';
import { WebsiteTrackingVisitsService } from '../services/website-tracking-visits.service';
import { WebsiteSectionsDataService } from '../website-sections-data.service';
import { Iapp_Sections_Data } from '../../shared/service/app-sections-data.service';

@Component({
  selector: 'app-website-landingpage',
  templateUrl: './website-landingpage.component.html',
  styleUrl: './website-landingpage.component.css'
})
export class WebsiteLandingpageComponent implements OnInit, OnDestroy {
  private stream: Subject<void> = new Subject<void>();
  isButtonVisible = false;
  firstContent: any = [];
  socialMediaContent: any = [];
  aboutContent: any = [];
  featuresContent: any = [];
  clientsContent: any = [];
  contactContent: any = [];
  pricingContent: any = [];
  faqContent: any = [];
  lastContent: any = [];
  teamContent: any = [];
  websiteSectionsDataObj: Iapp_Sections_Data = <Iapp_Sections_Data>{}
  constructor(private _WebsiteSectionsDataService: WebsiteSectionsDataService) { }
  ngOnInit(): void {
    this.Website_Sections_DataLoad();
  }
  Website_Sections_DataLoad() {
    this.websiteSectionsDataObj.App_Links_Stp = 0;
    this._WebsiteSectionsDataService.Website_Sections_DataLoad(this.websiteSectionsDataObj)
      .pipe(takeUntil(this.stream))
      .subscribe((res: any) => {
        if (res.azmestic1 && res.azmestic1.length > 0) {
          this.firstContent = res.azmestic1;
        }
        if (res.azmestic2 && res.azmestic2.length > 0) {
          this.socialMediaContent = res.azmestic2;
        }
        if (res.azmestic3 && res.azmestic3.length > 0) {
          this.aboutContent = res.azmestic3;
        }
        if (res.azmestic4 && res.azmestic4.length > 0) {
          this.featuresContent = res.azmestic4;
        }
        if (res.azmestic5 && res.azmestic5.length > 0) {
          this.clientsContent = res.azmestic5;
        }
        if (res.azmestic6 && res.azmestic6.length > 0) {
          this.contactContent = res.azmestic6;
        }
        if (res.azmestic7 && res.azmestic7.length > 0) {
          this.teamContent = res.azmestic7;
        }
        if (res.azmestic8 && res.azmestic8.length > 0) {
          this.pricingContent = res.azmestic8;
        }
        if (res.azmestic9 && res.azmestic9.length > 0) {
          this.faqContent = res.azmestic9;
        }
        if (res.azmestic10 && res.azmestic10.length > 0) {
          this.lastContent = res.azmestic10;
        }
      }
        ,
        error => {
        }

      );
  }
  ngOnDestroy() {
    this.stream.next();
    this.stream.complete();
  }



}
