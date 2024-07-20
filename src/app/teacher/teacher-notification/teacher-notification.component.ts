import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
interface TeacherNotification {
  visitor: string;
  timeOfVisit: string;
  type: string;
  isReadFlag:boolean;
}

@Component({
  selector: 'app-teacher-notification',
 standalone:true,
 imports:[CommonModule,TranslateModule],
  templateUrl: './teacher-notification.component.html',
  styleUrl: './teacher-notification.component.css'
})
export class TeacherNotificationComponent {
  notifications: TeacherNotification[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<TeacherNotification[]>('assets/jsonFiles/teacher-notifications.json').subscribe(data => {
      this.notifications = data;
    });
  }
  readTeacherNotification(notification:any){
    notification.isReadFlag=true
  }
}
