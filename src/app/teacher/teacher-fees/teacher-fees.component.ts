import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-teacher-fees',
  templateUrl: './teacher-fees.component.html',
  styleUrl: './teacher-fees.component.css'
})
export class TeacherFeesComponent {
@Input() sections :any=[];
}
