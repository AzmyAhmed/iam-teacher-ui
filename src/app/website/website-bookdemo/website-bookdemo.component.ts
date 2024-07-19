import { Component, ViewChild } from '@angular/core';
import { FormsComponent } from "../../shared/component/forms/forms.component";
import { CommonModule } from '@angular/common';
import { WebsiteDemoConfirmationComponent } from "../website-demo-confirmation/website-demo-confirmation.component";

@Component({
  selector: 'app-website-bookdemo',
  standalone: true,
  imports: [FormsComponent, CommonModule, WebsiteDemoConfirmationComponent],
  templateUrl: './website-bookdemo.component.html',
  styleUrl: './website-bookdemo.component.css'
})
export class WebsiteBookdemoComponent {
  showFormFalg: number = 1;
  handleFormSubmit(formData: any): void {
    console.log('Form Data:', formData);
    // Handle the form data, e.g., send it to the server
  }
  @ViewChild(FormsComponent) dynamicForm!: FormsComponent;
  teacherBookDemo(): void {
    this.dynamicForm.submitForm();
    this.showFormFalg = 0;

  }
}

