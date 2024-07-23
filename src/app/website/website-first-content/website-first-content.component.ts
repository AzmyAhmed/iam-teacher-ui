import { Component, TemplateRef, ViewChild } from '@angular/core';
import { WebsiteBookdemoComponent } from "../website-bookdemo/website-bookdemo.component";
import { SharedModule } from "../../shared/shared.module";
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ModalComponent } from '../../shared/component/modal/modal.component';

@Component({
  selector: 'app-website-first-content',
  standalone: true,
  imports: [WebsiteBookdemoComponent, SharedModule, CommonModule, TranslateModule],
  templateUrl: './website-first-content.component.html',
  styleUrl: './website-first-content.component.css'
})
export class WebsiteFirstContentComponent {
  componentTitle: string = ''
  targetComponent: string = ''
  @ViewChild(ModalComponent) modal!: ModalComponent;
  @ViewChild('modalTemplate') modalTemplate!: TemplateRef<any>;
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
