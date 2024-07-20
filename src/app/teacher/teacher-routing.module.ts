import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './teacher.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { teacherAuthGuard } from './teacher-guard/teacher-auth.guard';
import { TeacherClassroomsComponent } from './teacher-classrooms/teacher-classrooms.component';
import { TeacherSectionsComponent } from './teacher-sections/teacher-sections.component';

const routes: Routes = [
  { path: '', redirectTo: 'iamteacher', pathMatch: 'full' },
  {
    path: '', component: TeacherComponent, children: [
      { path: 'iamteacher/:id', component: TeacherDashboardComponent, data: { description: 'azmy ahmed software engineer' }, canActivate: [teacherAuthGuard] },
      { path: 'class-rooms/:id', component: TeacherSectionsComponent, data: { description: 'azmy ahmed software engineer' }, canActivate: [teacherAuthGuard] },
      { path: 'students/:id', component: TeacherSectionsComponent, data: { description: 'azmy ahmed software engineer' }, canActivate: [teacherAuthGuard] },
      { path: 'exams/:id', component: TeacherSectionsComponent, data: { description: 'azmy ahmed software engineer' }, canActivate: [teacherAuthGuard] },
      { path: 'attendance/:id', component: TeacherSectionsComponent, data: { description: 'azmy ahmed software engineer' }, canActivate: [teacherAuthGuard] },
      { path: 'fees/:id', component: TeacherSectionsComponent, data: { description: 'azmy ahmed software engineer' }, canActivate: [teacherAuthGuard] },
      { path: 'reports/:id', component: TeacherSectionsComponent, data: { description: 'azmy ahmed software engineer' }, canActivate: [teacherAuthGuard] },
      { path: 'statics/:id', component: TeacherSectionsComponent, data: { description: 'azmy ahmed software engineer' }, canActivate: [teacherAuthGuard] },
      { path: 'expenses/:id', component: TeacherSectionsComponent, data: { description: 'azmy ahmed software engineer' }, canActivate: [teacherAuthGuard] },
    ]
  }
  ,
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
