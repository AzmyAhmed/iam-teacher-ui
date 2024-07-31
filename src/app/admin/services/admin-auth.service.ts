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
}
