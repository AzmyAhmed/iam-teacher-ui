import { Component, ViewChild } from '@angular/core';
import { FormsComponent } from "../../shared/component/forms/forms.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teacher-protofilio-send-message',
  standalone: true,
  imports: [FormsComponent, CommonModule],
  templateUrl: './teacher-protofilio-send-message.component.html',
  styleUrl: './teacher-protofilio-send-message.component.css'
})
export class TeacherProtofilioSendMessageComponent {
  sendMessageFlag:boolean=false;
  options: any = [
    {
      "value": 2,
      "label": "Student"
    },
    {
      "value": 2,
      "label": "Guardian"
    }
 ]
  handleFormSubmit(formData: any): void {
    console.log('Form Data:', formData);
    // Handle the form data, e.g., send it to the server
  }
  @ViewChild(FormsComponent) dynamicForm!: FormsComponent;
  sendMessageToTeacher(): void {
    this.dynamicForm.submitForm();
    this.sendMessageFlag=true;
  }
}
