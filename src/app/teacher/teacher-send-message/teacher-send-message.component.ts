import { Component, ViewChild } from '@angular/core';
import { FormsComponent } from "../../shared/component/forms/forms.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teacher-send-message',
  standalone: true,
  imports: [FormsComponent, CommonModule],
  templateUrl: './teacher-send-message.component.html',
  styleUrl: './teacher-send-message.component.css'
})
export class TeacherSendMessageComponent {
  sendMessageFlag: boolean = false;
  options: any = [
    {
      "value": 1,
      "label": "Guradian"
    },
    {
      "value": 2,
      "label": "Student"
    }


  ]
  handleFormSubmit(formData: any): void {
    console.log('Form Data:', formData);
    // Handle the form data, e.g., send it to the server
  }
  @ViewChild(FormsComponent) dynamicForm!: FormsComponent;
  sendMessageToGuardin(): void {
    this.dynamicForm.submitForm();
    this.sendMessageFlag = true;
  }
  userType: number = 1;
  selectUserType(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.userType = Number(target.value);
  }
}
