import { Component, ViewChild } from '@angular/core';
import { FormsComponent } from '../../shared/component/forms/forms.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-teacher-add-student',
  standalone: true,
  imports: [FormsComponent,CommonModule,TranslateModule],
  templateUrl: './teacher-add-student.component.html',
  styleUrl: './teacher-add-student.component.css'
})
export class TeacherAddStudentComponent {
  handleFormSubmit(formData: any): void {
    console.log('Form Data:', formData);
    // Handle the form data, e.g., send it to the server
  }
  @ViewChild(FormsComponent) dynamicForm!: FormsComponent;
  bookWithTeacher(): void {
    this.dynamicForm.submitForm();
  }
}