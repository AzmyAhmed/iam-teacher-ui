import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-teacher-classrooms',
  templateUrl: './teacher-classrooms.component.html',
  styleUrl: './teacher-classrooms.component.css'
})
export class TeacherClassroomsComponent {
  @Input() sections: any = [];
}
