import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
interface TeacherMessages {
  sender: string;
  timeOfSend: string;
  message: string;
  address: string;
  phoneNumber: string;
}

@Component({
  selector: 'app-teacher-recieved-messages',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './teacher-recieved-messages.component.html',
  styleUrl: './teacher-recieved-messages.component.css'
})
export class TeacherRecievedMessagesComponent {
  teacherMessages: TeacherMessages[] = [];

  constructor(private http: HttpClient, public transalte: TranslateService) { }
  ngOnInit(): void {
    this.http.get<TeacherMessages[]>('assets/jsonFiles/teacher-messages.json').subscribe(data => {
      this.teacherMessages = data;
    });
  }
}
