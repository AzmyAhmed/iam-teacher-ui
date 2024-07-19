import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class TeacherAuthService {
  private loggedIn = new BehaviorSubject<boolean>(this.checkLoginStatus());

  constructor() { }

  private checkLoginStatus(): boolean {
    return localStorage.getItem('loggedIn') === 'true';
  }

  isLoggedIn(): boolean {
    return this.loggedIn.value;
  }

  login(): void {
    localStorage.setItem('loggedIn', 'true');
    this.loggedIn.next(true);
  }

  logout(): void {
    localStorage.removeItem('loggedIn');
    this.loggedIn.next(false);
  }
}
