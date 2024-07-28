import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import { Iapp_Sections_Data } from '../../shared/service/app-sections-data.service';
import { WebsiteSectionsDataService } from '../website-sections-data.service';
interface PricingPlan {
  title: string;
  price: number;
  discount: number;
  finalPrice: number;
  type: string;
}

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent {
  @Input() pricingPlans: any = [];
  constructor(private meta: Meta,public translate: TranslateService, private _WebsiteSectionsDataService: WebsiteSectionsDataService) {
    if (this.pricingPlans.length == 0) {
      this.Website_Sections_DataLoad();
    }

  }
  websiteSectionsDataObj: Iapp_Sections_Data = <Iapp_Sections_Data>{}
  stream: Subject<void> = new Subject();
  Website_Sections_DataLoad() {
    this.websiteSectionsDataObj.App_Links_Stp = 10;
    this._WebsiteSectionsDataService.Website_Sections_DataLoad(this.websiteSectionsDataObj)
      .pipe(takeUntil(this.stream))
      .subscribe((res: any) => {
        if (res.azmestic8 && res.azmestic8.length > 0) {
          this.pricingPlans = res.azmestic8;
        }
      }
        ,
        error => {
        }

      );
  }
}
