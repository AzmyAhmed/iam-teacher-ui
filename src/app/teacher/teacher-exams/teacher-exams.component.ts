import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-teacher-exams',
  templateUrl: './teacher-exams.component.html',
  styleUrl: './teacher-exams.component.css'
})
export class TeacherExamsComponent {
  @Input() sections: any = [];

}
