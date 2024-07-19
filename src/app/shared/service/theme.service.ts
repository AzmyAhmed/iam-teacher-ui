import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private lightThemeUrl = 'assets/css/light.css';
  private darkThemeUrl = 'assets/css/dark.css';
  private themeSubject = new BehaviorSubject<string>('light');
  theme$ = this.themeSubject.asObservable();
  constructor() {
    const isDark = localStorage.getItem('isDarkTheme') === 'true';
    this.toggleTheme(isDark);
  }
  setTheme(theme: any) {
    this.themeSubject.next(theme);

  }
  toggleTheme(isDark: boolean) {
    const themeLink = document.getElementById('theme-link') as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = isDark ? this.darkThemeUrl : this.lightThemeUrl;
    }
    localStorage.setItem('isDarkTheme', String(isDark));
  }
}