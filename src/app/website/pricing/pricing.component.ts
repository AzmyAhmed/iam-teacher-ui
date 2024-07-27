import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { WebsiteSectionsDataService } from '../website-sections-data.service';
import { Iapp_Sections_Data } from '../../shared/service/app-sections-data.service';
import { Subject, takeUntil } from 'rxjs';

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
  websiteSectionsDataObj: Iapp_Sections_Data = <Iapp_Sections_Data>{}
  pricingPlans: any = [];
  stream: Subject<void> = new Subject();
  constructor(private _WebsiteSectionsDataService: WebsiteSectionsDataService, public translate: TranslateService) {
    this.Website_Sections_DataLoad();
  }
  Website_Sections_DataLoad() {
    this.websiteSectionsDataObj.App_Links_Stp = 10;
    this._WebsiteSectionsDataService.Website_Sections_DataLoad(this.websiteSectionsDataObj)
      .pipe(takeUntil(this.stream))
      .subscribe((res: any) => {
        if (res.azmestic1 && res.azmestic1.length > 0) {
          this.pricingPlans = res.azmestic1;
        }
      }
        ,
        error => {
        }

      );
  }
}
