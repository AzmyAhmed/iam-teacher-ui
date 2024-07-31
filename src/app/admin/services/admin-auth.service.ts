import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {
  constructor() {
  }
  // Simulating a logged-in status with localStorage for example purposes
  isAuthenticated(): boolean {
    return sessionStorage.getItem('admin') !== null;
  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token'); // Adjust this logic based on your authentication mechanism
  }

  login(token: string): void {
    localStorage.setItem('token', token);
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
