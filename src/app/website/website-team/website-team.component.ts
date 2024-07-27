
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ModalComponent } from '../../shared/component/modal/modal.component';
import { Iapp_Sections_Data } from '../../shared/service/app-sections-data.service';
import { Subject, takeUntil } from 'rxjs';
import { WebsiteSectionsDataService } from '../website-sections-data.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-website-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './website-team.component.html',
  styleUrl: './website-team.component.css'
})
export class WebsiteTeamComponent {
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
    this.websiteSectionsDataObj.App_Links_Stp = 8;
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
