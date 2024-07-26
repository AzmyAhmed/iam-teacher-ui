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

@Component({
  selector: 'app-website-first-content',
  standalone: true,
  imports: [WebsiteBookdemoComponent, SharedModule, CommonModule, TranslateModule, WebsiteLiveViewComponent],
  templateUrl: './website-first-content.component.html',
  styleUrl: './website-first-content.component.css'
})
export class WebsiteFirstContentComponent {
  componentTitle: string = ''
  targetComponent: string = '';
  appSectionsDataObj: Iapp_Sections_Data = <Iapp_Sections_Data>{}
  appSectionsDataResult: any[] = []
  @ViewChild(ModalComponent) modal!: ModalComponent;
  @ViewChild('modalTemplate') modalTemplate!: TemplateRef<any>;
  stream: Subject<void> = new Subject();
  constructor(private _AppSectionsDataService: AppSectionsDataService , public translate:TranslateService) {
    this.app_Sections_DataLoad();
  }
  app_Sections_DataLoad() {
    this.appSectionsDataObj.App_Links_Stp = 29;
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


  //Sof  Modal Area =====================================18-7-2024 Azmestic============================
  openModalTemplate(targetComponent: string, componentTitle: string) {
    this.targetComponent = targetComponent;
    this.componentTitle = componentTitle;
    if (this.modal) {
      this.modal.content = this.modalTemplate;
      this.modal.open();
    } else {
      console.error(' Modal component is not available');
    }
  }
}
