import { Component } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.css'
})
export class TeacherComponent {
  fromJson: string = 'assets/jsonFiles/iamteacher-teacher-links.json'
  fromModule = "teacher"
}
