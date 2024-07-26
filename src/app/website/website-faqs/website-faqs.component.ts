import { Component, TemplateRef, ViewChild } from '@angular/core';
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
  selector: 'app-website-faqs',
  standalone: true,
  imports: [ CommonModule, TranslateModule],
  templateUrl: './website-faqs.component.html',
  styleUrl: './website-faqs.component.css'
})
export class WebsiteFaqsComponent {
  componentTitle: string = ''
  targetComponent: string = '';
  websiteSectionsDataObj: Iapp_Sections_Data = <Iapp_Sections_Data>{}
  websiteSectionsDataResult: any[] = []
  socialMediaLinks: any[] = []
  @ViewChild(ModalComponent) modal!: ModalComponent;
  @ViewChild('modalTemplate') modalTemplate!: TemplateRef<any>;
  stream: Subject<void> = new Subject();
  constructor(private _WebsiteSectionsDataService: WebsiteSectionsDataService, public translate: TranslateService) {
    this.Website_Sections_DataLoad();
  }
  Website_Sections_DataLoad() {
    this.websiteSectionsDataObj.App_Links_Stp = 33;
    this._WebsiteSectionsDataService.Website_Sections_DataLoad(this.websiteSectionsDataObj)
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
