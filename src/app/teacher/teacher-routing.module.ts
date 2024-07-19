import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './teacher.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { teacherAuthGuard } from './teacher-guard/teacher-auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'iamteacher', pathMatch: 'full' },
  {
    path: '', component: TeacherComponent, children: [
      { path: 'iamteacher/:id', component: TeacherDashboardComponent, data: { description: 'azmy ahmed software engineer' },canActivate: [teacherAuthGuard] },
    ]
  }
  ,
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
