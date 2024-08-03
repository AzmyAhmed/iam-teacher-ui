
import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { Iapp_Sections_Data } from '../../shared/service/app-sections-data.service';
import { WebsiteSectionsDataService } from '../website-sections-data.service';
import { ModalComponent } from '../../shared/component/modal/modal.component';
import { SnackBarService } from '../../shared/service/snack-bar.service';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
@Component({
  selector: 'app-website-team',
  standalone: true,
  imports: [CommonModule, TranslateModule, FormsModule, SharedModule],
  templateUrl: './website-team.component.html',
  styleUrl: './website-team.component.css'
})
export class WebsiteTeamComponent {
  @Input() websiteSectionsDataResult: any[] = [];
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
    console.log("adminLink To  Teams = ", this.adminLink);
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
  TeamObj: any = {};
  onAddTeam() {
    this.TeamObj = {};
    this.TeamObj.Serial = -1;
    this.TeamObj.ReturnCode = 20;
    this.TeamObj.App_Links_Stp = 8;
  }
  onEditTeam(team: any) {
    this.TeamObj = team;
    this.TeamObj.ReturnCode = 30;
  }
  onDeleteTeam(team: any) {
    this.TeamObj = team;
    this.TeamObj.ReturnCode = 40;

  }
  onConfirmTeam() {
    if (this.TeamObj) {
      this.TeamObj.IsActive = this.TeamObj.IsActive ? 1 : 0;
      this.TeamObj.DefaultStp = this.TeamObj.DefaultStp ? 1 : 0;
      this._WebsiteSectionsDataService.Website_Team_DataSave(this.TeamObj)
        .pipe(takeUntil(this.stream))
        .subscribe({
          next: (value) => {
            if (value.azmestic1.length > 0) {
              // Assuming value is an array
              this.Website_Sections_DataLoad();
              this.modal.close();
              this.TeamObj = {};
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
