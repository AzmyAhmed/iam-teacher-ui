import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import { AppSectionsDataService, Iapp_Sections_Data } from '../../shared/service/app-sections-data.service';
import { IWebsite_Sections_Data, WebsiteSectionsDataService } from '../website-sections-data.service';

@Component({
  selector: 'app-website-aboutus',
  templateUrl: './website-aboutus.component.html',
  styleUrl: './website-aboutus.component.css'
})
export class WebsiteAboutusComponent {
  @Input() websiteSectionsDataResult: any[] = []
  constructor(public translate: TranslateService, private _WebsiteSectionsDataService: WebsiteSectionsDataService) {
    if (this.websiteSectionsDataResult.length == 0) {
      this.Website_Sections_DataLoad();
    }

  }
  websiteSectionsDataObj: Iapp_Sections_Data = <Iapp_Sections_Data>{}
  stream: Subject<void> = new Subject();
  Website_Sections_DataLoad() {
    this.websiteSectionsDataObj.App_Links_Stp = 2;
    this._WebsiteSectionsDataService.Website_Sections_DataLoad(this.websiteSectionsDataObj)
      .pipe(takeUntil(this.stream))
      .subscribe((res: any) => {
        if (res.azmestic3 && res.azmestic3.length > 0) {
          this.websiteSectionsDataResult = res.azmestic3;
        }
      }
        ,
        error => {
        }

      );
  }
}
