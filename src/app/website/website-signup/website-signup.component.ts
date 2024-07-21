import { Component, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { FormsComponent } from '../../shared/component/forms/forms.component';
import { ModalComponent } from '../../shared/component/modal/modal.component';

@Component({
  selector: 'app-website-signup',
  templateUrl: './website-signup.component.html',
  styleUrl: './website-signup.component.css'
})
export class WebsiteSignupComponent {
  teacherId: any;
  isReadTerms: boolean = false;
  options: any = [
    {
      "value": 1,
      "label": "Teacher"
    },
    {
      "value": 2,
      "label": "School"
    },
    {
      "value": 3,
      "label": "Center"
    },
    {
      "value": 4,
      "label": "Kinder"
    }

  ]
  constructor(
    public translate: TranslateService, private router: Router) {
    this.teacherId = localStorage.getItem('teacherId');
    if (!this.teacherId) {
      this.teacherId = 1;
    }
  }

  //Sof  Modal Area =====================================19-7-2024 Azmestic============================
  @ViewChild(ModalComponent) modal!: ModalComponent;
  @ViewChild('modalTemplate') modalTemplate!: TemplateRef<any>;
  targetComponent: string = '';
  componentTitle: string = '';
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
  acceptTerms() {
    this.isReadTerms = !this.isReadTerms
  }
  @ViewChild(FormsComponent) dynamicForm!: FormsComponent;
  handleFormSubmit(formData: any): void {
    console.log('Form Data:', formData);
    // Handle the form data, e.g., send it to the server
  }
  confirmTeacherSignUp(): void {
    this.dynamicForm.submitForm();
    this.router.navigate(['/website/website-signup-confirmation'])
  }
}
