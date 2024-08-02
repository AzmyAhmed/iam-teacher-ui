import { Component, Input, input, TemplateRef, ViewChild } from '@angular/core';
import { WebsiteBookdemoComponent } from "../website-bookdemo/website-bookdemo.component";
import { SharedModule } from "../../shared/shared.module";
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ModalComponent } from '../../shared/component/modal/modal.component';
import { WebsiteLiveViewComponent } from "../website-live-view/website-live-view.component";
import { AppSectionsDataService, Iapp_Sections_Data } from '../../shared/service/app-sections-data.service';
import { Subject, takeUntil } from 'rxjs';
import { SharedService } from '../../shared/service/shared.service';
import { IWebsite_Sections_Data, WebsiteSectionsDataService } from '../website-sections-data.service';
import { AdminHeaderService } from '../../admin/admin-header/admin-header.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SnackBarService } from '../../shared/service/snack-bar.service';

@Component({
  selector: 'app-website-first-content',
  standalone: true,
  imports: [RouterModule, FormsModule, WebsiteBookdemoComponent, SharedModule, CommonModule, TranslateModule, WebsiteLiveViewComponent],
  templateUrl: './website-first-content.component.html',
  styleUrl: './website-first-content.component.css'
})
export class WebsiteFirstContentComponent {
  componentTitle: string = ''
  targetComponent: string = '';
  adminLink: any = {}
  @Input() firstContent: any = [];
  @Input() socialMediaContent: any = [];
  @ViewChild(ModalComponent) modal!: ModalComponent;
  @ViewChild('modalTemplate') modalTemplate!: TemplateRef<any>;
  stream: Subject<void> = new Subject();
  constructor(private snack: SnackBarService, public translate: TranslateService, private _WebsiteSectionsDataService: WebsiteSectionsDataService) {
    if (this.firstContent.length == 0) {
      this.Website_Sections_DataLoad();
      this.getLinkFromAdmin();
    }
  }
  getLinkFromAdmin() {
    const link = sessionStorage.getItem("linkFromAdmin");
    this.adminLink = link ? JSON.parse(link) : null;
    console.log("adminLink To First Content = ", this.adminLink);
  }
  websiteSectionsDataObj: IWebsite_Sections_Data = <IWebsite_Sections_Data>{}
  Website_Sections_DataLoad() {
    this.firstContent = [];
    this.aboutObj = {};
    this.socialMediaObj = {};
    this.socialMediaContent = [];
    this.websiteSectionsDataObj.App_Links_Stp = 29;
    this._WebsiteSectionsDataService.Website_Sections_DataLoad(this.websiteSectionsDataObj)
      .pipe(takeUntil(this.stream))
      .subscribe((res: any) => {
        if (res.azmestic1 && res.azmestic1.length > 0) {
          this.firstContent = res.azmestic1;
          this.aboutObj = this.firstContent[0];
        }
        if (res.azmestic2 && res.azmestic2.length > 0) {
          this.socialMediaContent = res.azmestic2;
          this.socialMediaObj = res.azmestic2[0];
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
  aboutObj: any = {};
  socialMediaObj: any = {};
  onConfirm(componentTitle: string) {
    if (componentTitle == 'ADD') {
      this.aboutObj.Serial = -1;
      this.aboutObj.ReturnCode = 20;
      this.aboutObj.App_Links_Stp = 29
      this.saveAbout();
      //ADD AREA
    }
    else if (componentTitle == 'EDIT') {
      this.aboutObj.ReturnCode = 30;
      this.saveAbout();
    }
    else if (componentTitle == 'DELETE') {
      this.aboutObj.ReturnCode = 40;
      this.saveAbout();

    }
    // Add your form submission logic here
  }

  saveAbout() {

    this._WebsiteSectionsDataService.Website_FirstContent_DataSave(this.aboutObj)
      .pipe(takeUntil(this.stream))
      .subscribe({
        next: (value) => {
          // Assuming value is an array

        },
        error: (err) => this.snack.showDbErrorSnackBar("ERROR", "ALERT")
        ,
        complete: () => {
          this.snack.showDbSucessSnackBar("OPERATIONSUCCESS", "ALERT");
          this.Website_Sections_DataLoad();
          this.modal.close();
        }

      });
  }

  onConfirmSocialMedia(componentTitle: string) {
    if (componentTitle == 'ADD') {
      this.socialMediaObj.Serial = -1;
      this.socialMediaObj.ReturnCode = 20;
      this.socialMediaObj.App_Links_Stp = 29
      this.saveSocialMedia();
      //ADD AREA
    }
    else if (componentTitle == 'EDIT') {
      this.socialMediaObj.ReturnCode = 30;
      this.saveSocialMedia();
    }
    else if (componentTitle == 'DELETE') {
      this.socialMediaObj.ReturnCode = 40;
      this.saveSocialMedia();

    }
    // Add your form submission logic here
  }

  saveSocialMedia() {
    this._WebsiteSectionsDataService.Website_SocialMedia_DataSave(this.socialMediaObj)
      .pipe(takeUntil(this.stream))
      .subscribe({
        next: (value) => {
          // Assuming value is an array

        },
        error: (err) => this.snack.showDbErrorSnackBar("ERROR", "ALERT")
        ,
        complete: () => {
          this.snack.showDbSucessSnackBar("OPERATIONSUCCESS", "ALERT");
          this.Website_Sections_DataLoad();
          this.modal.close();
        }

      });
  }
}
