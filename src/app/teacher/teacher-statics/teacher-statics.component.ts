import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-teacher-statics',
  templateUrl: './teacher-statics.component.html',
  styleUrl: './teacher-statics.component.css'
})
export class TeacherStaticsComponent {
@Input () sections:any=[];
}
