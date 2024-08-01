import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { WebsiteBookdemoComponent } from "../website-bookdemo/website-bookdemo.component";
import { SharedModule } from "../../shared/shared.module";
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ModalComponent } from '../../shared/component/modal/modal.component';
import { WebsiteLiveViewComponent } from "../website-live-view/website-live-view.component";
import { Subject, takeUntil } from 'rxjs';
import { IWebsite_Sections_Data, WebsiteSectionsDataService } from '../website-sections-data.service';
import { SnackBarService } from '../../shared/service/snack-bar.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-website-last-content',
  standalone: true,
  imports: [RouterModule, FormsModule, WebsiteBookdemoComponent, SharedModule, CommonModule, TranslateModule, WebsiteLiveViewComponent],
  templateUrl: './website-last-content.component.html',
  styleUrl: './website-last-content.component.css'
})
export class WebsiteLastContentComponent {
  componentTitle: string = ''
  targetComponent: string = '';
  adminLink: any = {}
  @Input() lastContent: any = [];
  @Input() socialMediaContent: any = [];
  @ViewChild(ModalComponent) modal!: ModalComponent;
  @ViewChild('modalTemplate') modalTemplate!: TemplateRef<any>;
  stream: Subject<void> = new Subject();
  constructor(private snack: SnackBarService, public translate: TranslateService, private _WebsiteSectionsDataService: WebsiteSectionsDataService) {
    if (this.lastContent.length == 0) {
      this.Website_Sections_DataLoad();
      this.getLinkFromAdmin();
    }
  }
  getLinkFromAdmin() {
    const link = sessionStorage.getItem("linkFromAdmin");
    this.adminLink = link ? JSON.parse(link) : null;
    console.log("adminLink To Last Content = ", this.adminLink);
  }
  websiteSectionsDataObj: IWebsite_Sections_Data = <IWebsite_Sections_Data>{}
  Website_Sections_DataLoad() {
    this.lastContent = [];
    this.aboutObj = {};
    this.socialMediaObj = {};
    this.socialMediaContent = [];
    this.websiteSectionsDataObj.App_Links_Stp = 30;
    this._WebsiteSectionsDataService.Website_Sections_DataLoad(this.websiteSectionsDataObj)
      .pipe(takeUntil(this.stream))
      .subscribe((res: any) => {
        if (res.azmestic10 && res.azmestic10.length > 0) {
          this.lastContent = res.azmestic10;
          this.aboutObj = this.lastContent[0];
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
      this.aboutObj.App_Links_Stp = 30
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
    this._WebsiteSectionsDataService.Website_LastContent_DataSave(this.aboutObj)
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
