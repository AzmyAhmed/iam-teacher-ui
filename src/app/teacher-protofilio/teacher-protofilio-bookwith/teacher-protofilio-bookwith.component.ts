import { Component, ViewChild } from '@angular/core';
import { FormsComponent } from "../../shared/component/forms/forms.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teacher-protofilio-bookwith',
  standalone: true,
  imports: [FormsComponent,CommonModule],
  templateUrl: './teacher-protofilio-bookwith.component.html',
  styleUrl: './teacher-protofilio-bookwith.component.css'
})
export class TeacherProtofilioBookwithComponent {
  options: any = [
    {
      "value": 1,
      "label": "Guradian"
    },
    {
      "value": 2,
      "label": "Student"
    },
    {
      "value": 3,
      "label": "School"
    },
    {
      "value": 4,
      "label": "Center"
    },
    {
      "value": 5,
      "label": "Kinder"
    }

  ]
  handleFormSubmit(formData: any): void {
    console.log('Form Data:', formData);
    // Handle the form data, e.g., send it to the server
  }
  @ViewChild(FormsComponent) dynamicForm!: FormsComponent;
  bookWithTeacher(): void {
    this.dynamicForm.submitForm();
  }
}
