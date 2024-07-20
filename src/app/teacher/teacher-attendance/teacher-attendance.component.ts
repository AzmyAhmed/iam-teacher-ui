import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-teacher-attendance',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './teacher-attendance.component.html',
  styleUrl: './teacher-attendance.component.css'
})
export class TeacherAttendanceComponent {
  @Input() sections: any = [];
}
