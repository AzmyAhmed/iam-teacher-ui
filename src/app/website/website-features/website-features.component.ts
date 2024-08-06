import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import { Iapp_Sections_Data } from '../../shared/service/app-sections-data.service';
import { CommonModule } from '@angular/common';
import { IWebsite_Sections_Data, WebsiteSectionsDataService } from '../website-sections-data.service';
import { ModalComponent } from '../../shared/component/modal/modal.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { SnackBarService } from '../../shared/service/snack-bar.service';

@Component({
  selector: 'app-website-features',
  standalone: true,
  imports: [CommonModule, SharedModule,
    TranslateModule, FormsModule
  ],
  templateUrl: './website-features.component.html',
  styleUrl: './website-features.component.css'
})
export class WebsiteFeaturesComponent {
  @Input() websiteSectionsDataResult: any = [];
  adminLink: any = {};
  constructor(private snack: SnackBarService, public translate: TranslateService, private _WebsiteSectionsDataService: WebsiteSectionsDataService) {
    if (this.websiteSectionsDataResult.length == 0) {
      this.Website_Sections_DataLoad();
    }
    this.getLinkFromAdmin();
  }
  getLinkFromAdmin() {
    const link = sessionStorage.getItem("linkFromAdmin");
    this.adminLink = link ? JSON.parse(link) : null;
    console.log("adminLink To  Features = ", this.adminLink);
  }
  websiteSectionsDataObj: IWebsite_Sections_Data = <IWebsite_Sections_Data>{}
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
  targetComponent: string = '';
  componentTitle: string = '';
  @ViewChild(ModalComponent) modal!: ModalComponent;
  @ViewChild('modalTemplate') modalTemplate!: TemplateRef<any>;
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
  FeatureObj: any = {};
  onAddFeature() {
    this.FeatureObj = {};
    this.FeatureObj.Serial = -1;
    this.FeatureObj.ReturnCode = 20;
    this.FeatureObj.App_Links_Stp = 3;
  }
  onEditFeature(feature: any) {
    this.FeatureObj = feature;
    this.FeatureObj.ReturnCode = 30;
  }
  onDeleteFeature(feature: any) {
    this.FeatureObj = feature;
    this.FeatureObj.ReturnCode = 40;

  }
  onConfirmFeatuer() {
    if (this.FeatureObj) {
      this.FeatureObj.IsActive = this.FeatureObj.IsActive ? 1 : 0;
      this.FeatureObj.DefaultStp = this.FeatureObj.DefaultStp ? 1 : 0;
      this._WebsiteSectionsDataService.Website_Feature_DataSave(this.FeatureObj)
        .pipe(takeUntil(this.stream))
        .subscribe({
          next: (value) => {
            if (value.azmestic1.length > 0) {
              // Assuming value is an array
              this.Website_Sections_DataLoad();
              this.modal.close();
              this.FeatureObj = {};
            }

          },
          error: (err) => this.snack.showDbErrorSnackBar("ERROR", "ALERT")
          ,
          complete: () => {

          }

        });
    }

  }
}
