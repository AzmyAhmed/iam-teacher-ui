import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TeacherAuthService } from '../services/teacher-auth.service';

export const teacherAuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(TeacherAuthService);
  const router = inject(Router);
  if (authService.isLoggedIn()) {
    return true;
  } else {
    router.navigate(['/teacher-protofilio/teacher-protofilio-login/1']); // Redirect to login if not authenticated
    return false;
  }
};