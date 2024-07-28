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
import { WebsiteSectionsDataService } from '../website-sections-data.service';

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
  @Input() firstContent: any = [];
  @Input() socialMediaContent: any = [];
  @ViewChild(ModalComponent) modal!: ModalComponent;
  @ViewChild('modalTemplate') modalTemplate!: TemplateRef<any>;
  stream: Subject<void> = new Subject();
  constructor(public translate: TranslateService) {
    if (this.firstContent.length == 0) {
      this.firstContent = sessionStorage.getItem("firstContent");
      this.socialMediaContent = sessionStorage.getItem("socialMediaContent");

    }
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
