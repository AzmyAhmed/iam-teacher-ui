import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { WebsiteBookdemoComponent } from "../website-bookdemo/website-bookdemo.component";
import { SharedModule } from "../../shared/shared.module";
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ModalComponent } from '../../shared/component/modal/modal.component';
import { WebsiteLiveViewComponent } from "../website-live-view/website-live-view.component";
import { AppSectionsDataService, Iapp_Sections_Data } from '../../shared/service/app-sections-data.service';
import { Subject, takeUntil } from 'rxjs';
import { SharedService } from '../../shared/service/shared.service';
import { WebsiteSectionsDataService } from '../website-sections-data.service';

@Component({
  selector: 'app-website-last-content',
  standalone: true,
  imports: [WebsiteBookdemoComponent, SharedModule, CommonModule, TranslateModule, WebsiteLiveViewComponent],
  templateUrl: './website-last-content.component.html',
  styleUrl: './website-last-content.component.css'
})
export class WebsiteLastContentComponent {
  @Input() websiteSectionsDataResult: any[] = []
  stream: Subject<void> = new Subject();
  constructor(public translate: TranslateService, private _WebsiteSectionsDataService: WebsiteSectionsDataService) {
    if (this.websiteSectionsDataResult.length == 0) {
      this.Website_Sections_DataLoad();
    }
  }

  websiteSectionsDataObj: Iapp_Sections_Data = <Iapp_Sections_Data>{}
  Website_Sections_DataLoad() {
    this.websiteSectionsDataObj.App_Links_Stp = 30;
    this._WebsiteSectionsDataService.Website_Sections_DataLoad(this.websiteSectionsDataObj)
      .pipe(takeUntil(this.stream))
      .subscribe((res: any) => {
        if (res.azmestic10 && res.azmestic10.length > 0) {
          this.websiteSectionsDataResult = res.azmestic10;
        }

      }
        ,
        error => {
        }

      );
  }
}
