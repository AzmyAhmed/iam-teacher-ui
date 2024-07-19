import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherProtofilioTeacheridService {

  private teacherIdSource = new BehaviorSubject<string | null>(null);
  teacherId$ = this.teacherIdSource.asObservable();
  updateUserId(teacherId: string | null): void {
    this.teacherIdSource.next(teacherId);
    localStorage.setItem('teacherId', String(teacherId));
  }
}
