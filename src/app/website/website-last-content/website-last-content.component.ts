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

  constructor(public translate: TranslateService) {
  }
}
