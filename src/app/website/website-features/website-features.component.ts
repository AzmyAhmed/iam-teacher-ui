import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import { Iapp_Sections_Data } from '../../shared/service/app-sections-data.service';
import { CommonModule } from '@angular/common';
import { WebsiteSectionsDataService } from '../website-sections-data.service';

@Component({
  selector: 'app-website-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './website-features.component.html',
  styleUrl: './website-features.component.css'
})
export class WebsiteFeaturesComponent {
  stream: Subject<void> = new Subject();
  websiteSectionsDataObj: Iapp_Sections_Data = <Iapp_Sections_Data>{}
  websiteSectionsDataResult: any[] = []
  constructor(private _websiteSectionsDataService: WebsiteSectionsDataService, public translate: TranslateService) {
    this.app_Sections_DataLoad();
  }

  app_Sections_DataLoad() {
    this.websiteSectionsDataObj.App_Links_Stp = 3;
    this._websiteSectionsDataService.Website_Sections_DataLoad(this.websiteSectionsDataObj)
      .pipe(takeUntil(this.stream))
      .subscribe((res: any) => {
        if (res.azmestic1 && res.azmestic1.length > 0) {
          this.websiteSectionsDataResult = res.azmestic1;
        }
      }
        ,
        error => {
        }

      );
  }
}
