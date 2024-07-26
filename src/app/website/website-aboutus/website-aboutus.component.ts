import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import { AppSectionsDataService } from '../../shared/service/app-sections-data.service';
import { IWebsite_Sections_Data, WebsiteSectionsDataService } from '../website-sections-data.service';

@Component({
  selector: 'app-website-aboutus',
  templateUrl: './website-aboutus.component.html',
  styleUrl: './website-aboutus.component.css'
})
export class WebsiteAboutusComponent {
  stream: Subject<void> = new Subject();
  appSectionsDataObj: IWebsite_Sections_Data = <IWebsite_Sections_Data>{}
  appSectionsDataResult: any[] = []
  constructor(private _WebsiteSectionsDataService: WebsiteSectionsDataService, public translate: TranslateService) {
    this.website_Sections_DataLoad();
  }

  website_Sections_DataLoad() {
    this.appSectionsDataObj.App_Links_Stp = 2;
    this._WebsiteSectionsDataService.Website_Sections_DataLoad(this.appSectionsDataObj)
      .pipe(takeUntil(this.stream))
      .subscribe((res: any) => {
        if (res.azmestic1 && res.azmestic1.length > 0) {
          this.appSectionsDataResult = res.azmestic1;
        }
      }
        ,
        error => {
        }

      );
  }
}
