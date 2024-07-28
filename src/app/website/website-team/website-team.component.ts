
import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { Iapp_Sections_Data } from '../../shared/service/app-sections-data.service';
import { WebsiteSectionsDataService } from '../website-sections-data.service';
@Component({
  selector: 'app-website-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './website-team.component.html',
  styleUrl: './website-team.component.css'
})
export class WebsiteTeamComponent {
  @Input() websiteSectionsDataResult: any[] = []
  constructor(public translate: TranslateService, private _WebsiteSectionsDataService: WebsiteSectionsDataService) {
    if (this.websiteSectionsDataResult.length == 0) {
      this.Website_Sections_DataLoad();
    }

  }
  websiteSectionsDataObj: Iapp_Sections_Data = <Iapp_Sections_Data>{}
  stream: Subject<void> = new Subject();
  Website_Sections_DataLoad() {
    this.websiteSectionsDataObj.App_Links_Stp = 8;
    this._WebsiteSectionsDataService.Website_Sections_DataLoad(this.websiteSectionsDataObj)
      .pipe(takeUntil(this.stream))
      .subscribe((res: any) => {
        if (res.azmestic7 && res.azmestic7.length > 0) {
          this.websiteSectionsDataResult = res.azmestic7;
        }
      }
        ,
        error => {
        }

      );
  }


}
