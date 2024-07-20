import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
interface Appointment {
  day: string;
  time: string;
}

interface TeacherAppointments {
  one: Appointment[];
  two: Appointment[];
  three: Appointment[];
  four: Appointment[];
  five: Appointment[];
  six: Appointment[];
}
@Component({
  selector: 'app-teacher-protofilio-appointment',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './teacher-protofilio-appointment.component.html',
  styleUrl: './teacher-protofilio-appointment.component.css'
})
export class TeacherProtofilioAppointmentComponent implements OnInit {
  appointments: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<TeacherAppointments>('assets/jsonFiles/teacher-appointments.json').subscribe(data => {
      this.appointments = data;
    });
  }
}