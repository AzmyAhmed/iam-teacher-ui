import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-teacher-reports',
  templateUrl: './teacher-reports.component.html',
  styleUrl: './teacher-reports.component.css'
})
export class TeacherReportsComponent {
@Input () sections:any=[];
}
