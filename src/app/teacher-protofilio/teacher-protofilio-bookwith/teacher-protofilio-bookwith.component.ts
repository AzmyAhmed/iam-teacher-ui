import { Component, ViewChild } from '@angular/core';
import { FormsComponent } from "../../shared/component/forms/forms.component";

@Component({
  selector: 'app-teacher-protofilio-bookwith',
  standalone: true,
  imports: [FormsComponent],
  templateUrl: './teacher-protofilio-bookwith.component.html',
  styleUrl: './teacher-protofilio-bookwith.component.css'
})
export class TeacherProtofilioBookwithComponent {
  handleFormSubmit(formData: any): void {
    console.log('Form Data:', formData);
    // Handle the form data, e.g., send it to the server
  }
  @ViewChild(FormsComponent) dynamicForm!: FormsComponent;
  bookWithTeacher(): void {
    this.dynamicForm.submitForm();
  }
}
