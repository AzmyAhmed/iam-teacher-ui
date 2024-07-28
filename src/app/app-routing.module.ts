import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './shared/component/notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'website',
    pathMatch: 'full'
  },
  {
    path: 'teacher', loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule), data: { preload: true }
  },
  {
    path: 'student', loadChildren: () => import('./student/student.module').then(m => m.StudentModule), data: { preload: true }
  },
  {
    path: 'guardian', loadChildren: () => import('./guardian/guardian.module').then(m => m.GuardianModule), data: { preload: true }
  },
  {
    path: 'website', loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule), data: { preload: true }
  },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  {
    path: 'teacher-live-demo', loadChildren: () => import('./teacher-live-demo/teacher-live-demo.module').then(m => m.TeacherLiveDemoModule), data: { preload: true }


  },
  { path: 'teacher-protofilio', loadChildren: () => import('./teacher-protofilio/teacher-protofilio.module').then(m => m.TeacherProtofilioModule), data: { preload: true } },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
