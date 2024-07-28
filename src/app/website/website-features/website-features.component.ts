import { Component, Input } from '@angular/core';
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
  @Input() websiteSectionsDataResult: any = [];
  constructor(public translate: TranslateService, private _WebsiteSectionsDataService: WebsiteSectionsDataService) {
    if (this.websiteSectionsDataResult.length == 0) {
      this.Website_Sections_DataLoad();
    }

  }
  websiteSectionsDataObj: Iapp_Sections_Data = <Iapp_Sections_Data>{}
  stream: Subject<void> = new Subject();
  Website_Sections_DataLoad() {
    this.websiteSectionsDataObj.App_Links_Stp = 3;
    this._WebsiteSectionsDataService.Website_Sections_DataLoad(this.websiteSectionsDataObj)
      .pipe(takeUntil(this.stream))
      .subscribe((res: any) => {
        if (res.azmestic4 && res.azmestic4.length > 0) {
          this.websiteSectionsDataResult = res.azmestic4;
        }
      }
        ,
        error => {
        }

      );
  }
}
