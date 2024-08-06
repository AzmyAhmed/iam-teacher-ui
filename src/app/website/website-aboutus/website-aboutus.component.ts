import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import { AppSectionsDataService, Iapp_Sections_Data } from '../../shared/service/app-sections-data.service';
import { IWebsite_Sections_Data, WebsiteSectionsDataService } from '../website-sections-data.service';
import { ModalComponent } from '../../shared/component/modal/modal.component';
import { SnackBarService } from '../../shared/service/snack-bar.service';

@Component({
  selector: 'app-website-aboutus',
  templateUrl: './website-aboutus.component.html',
  styleUrl: './website-aboutus.component.css'
})
export class WebsiteAboutusComponent {
  @Input() websiteSectionsDataResult: any[] = []
  constructor(private snack: SnackBarService, public translate: TranslateService, private _WebsiteSectionsDataService: WebsiteSectionsDataService) {
    if (this.websiteSectionsDataResult.length == 0) {
      this.Website_Sections_DataLoad();
      this.getLinkFromAdmin();
    }
  }
  adminLink: any = {}

  getLinkFromAdmin() {
    const link = sessionStorage.getItem("linkFromAdmin");
    this.adminLink = link ? JSON.parse(link) : null;
    console.log("adminLink To  About Us = ", this.adminLink);
  }
  websiteSectionsDataObj: IWebsite_Sections_Data = <IWebsite_Sections_Data>{}
  stream: Subject<void> = new Subject();
  aboutObj: any = {};
  Website_Sections_DataLoad() {
    this.websiteSectionsDataObj.App_Links_Stp = 2;
    this._WebsiteSectionsDataService.Website_Sections_DataLoad(this.websiteSectionsDataObj)
      .pipe(takeUntil(this.stream))
      .subscribe((res: any) => {
        if (res.azmestic3 && res.azmestic3.length > 0) {
          this.websiteSectionsDataResult = res.azmestic3;
          this.aboutObj = this.websiteSectionsDataResult[0];
        }
      }
        ,
        error => {
        }

      );
  }
  //Sof  Modal Area =====================================18-7-2024 Azmestic============================
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
  onAddAbout() {
    this.aboutObj = {};
    this.aboutObj.Serial = -1;
    this.aboutObj.ReturnCode = 20;
    this.aboutObj.App_Links_Stp = 2;
  }
  onEditAbout() {
    this.aboutObj.ReturnCode = 30;
  }
  onDeleteAbout() {
    this.aboutObj.ReturnCode = 40;
  }
  onConfirmAbout() {
    if (this.aboutObj) {
      this.aboutObj.IsActive = this.aboutObj.IsActive ? 1 : 0;
      this.aboutObj.DefaultStp = this.aboutObj.DefaultStp ? 1 : 0;
      this._WebsiteSectionsDataService.Website_About_DataSave(this.aboutObj)
        .pipe(takeUntil(this.stream))
        .subscribe({
          next: (value) => {
            if (value.azmestic1.length > 0) {
              // Assuming value is an array
              this.Website_Sections_DataLoad();
              this.modal.close();
              this.aboutObj = {};
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
