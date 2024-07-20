import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
interface TeacherClassSchduling {
  calssName: string;
  startClassTime: string;
  endClassTime: string;
  state: string;
}
@Component({
  selector: 'app-teacher-class-schduling',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './teacher-class-schduling.component.html',
  styleUrl: './teacher-class-schduling.component.css'
})
export class TeacherClassSchdulingComponent {
  teacherClassSchduling: TeacherClassSchduling[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<TeacherClassSchduling[]>('assets/jsonFiles/teacher-class-schduling.json').subscribe(data => {
      this.teacherClassSchduling = data;
    });
  }
}
