import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import { AppSectionsDataService, Iapp_Sections_Data } from '../../shared/service/app-sections-data.service';

@Component({
  selector: 'app-website-aboutus',
  templateUrl: './website-aboutus.component.html',
  styleUrl: './website-aboutus.component.css'
})
export class WebsiteAboutusComponent {
  stream: Subject<void> = new Subject();
  appSectionsDataObj: Iapp_Sections_Data = <Iapp_Sections_Data>{}
  appSectionsDataResult: any[] = []
  constructor(private _AppSectionsDataService: AppSectionsDataService, public translate: TranslateService) {
    this.app_Sections_DataLoad();
  }

  app_Sections_DataLoad() {
    this.appSectionsDataObj.App_Links_Stp = 2;
    this._AppSectionsDataService.app_Sections_DataLoad(this.appSectionsDataObj)
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
