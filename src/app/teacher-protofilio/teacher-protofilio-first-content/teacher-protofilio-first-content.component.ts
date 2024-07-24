import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ModalComponent } from '../../shared/component/modal/modal.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../shared/shared.module';
import { TeacherProtofilioBookwithComponent } from "../teacher-protofilio-bookwith/teacher-protofilio-bookwith.component";
import { TeacherProtofilioClassViewComponent } from "../../website/teacher-protofilio-class-view/teacher-protofilio-class-view.component";
import { TeacherProtofilioGuideComponent } from "../teacher-protofilio-guide/teacher-protofilio-guide.component";

@Component({
  selector: 'app-teacher-protofilio-first-content',
  standalone: true,
  imports: [SharedModule, CommonModule, TranslateModule, TeacherProtofilioBookwithComponent, TeacherProtofilioClassViewComponent, TeacherProtofilioGuideComponent],

  templateUrl: './teacher-protofilio-first-content.component.html',
  styleUrl: './teacher-protofilio-first-content.component.css'
})
export class TeacherProtofilioFirstContentComponent {
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