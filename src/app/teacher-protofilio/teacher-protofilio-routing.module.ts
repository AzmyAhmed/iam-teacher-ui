import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherProtofilioComponent } from './teacher-protofilio.component';
import { SharedModule } from '../shared/shared.module';
import { TeacherProtofilioLandingpageComponent } from './teacher-protofilio-landingpage/teacher-protofilio-landingpage.component';
import { TeacherProtofilioLoginComponent } from './teacher-protofilio-login/teacher-protofilio-login.component';
import { TeacherProtofilioSignupComponent } from './teacher-protofilio-signup/teacher-protofilio-signup.component';
import { TeacherProtofilioExamsComponent } from './teacher-protofilio-exams/teacher-protofilio-exams.component';
import { TeacherProtofilioAppointmentComponent } from './teacher-protofilio-appointment/teacher-protofilio-appointment.component';
import { TeacherProtofilioClassroomsComponent } from './teacher-protofilio-classrooms/teacher-protofilio-classrooms.component';
import { TeacherProtofilioBlogsComponent } from './teacher-protofilio-blogs/teacher-protofilio-blogs.component';
import { TeacherProtofilioSessionsComponent } from './teacher-protofilio-sessions/teacher-protofilio-sessions.component';
import { TeacherProtofilioAboutComponent } from './teacher-protofilio-about/teacher-protofilio-about.component';
import { TeacherProtofilioFinalreviewsComponent } from './teacher-protofilio-finalreviews/teacher-protofilio-finalreviews.component';
import { TeacherProtofilioTrainingComponent } from './teacher-protofilio-training/teacher-protofilio-training.component';
import { TeacherProtofilioClassFeaturesComponent } from './teacher-protofilio-class-features/teacher-protofilio-class-features.component';
const routes: Routes = [
  {
    path: '', component: TeacherProtofilioComponent, children: [
      { path: 'teacher-protofilio-landingpage/:id', component: TeacherProtofilioLandingpageComponent, data: { description: 'azmy ahmed software engineer' } },
      { path: 'teacher-protofilio-login', component: TeacherProtofilioLoginComponent, data: { description: 'azmy ahmed software engineer' } },
      { path: 'teacher-protofilio-signup', component: TeacherProtofilioSignupComponent, data: { description: 'azmy ahmed software engineer' } },
      { path: 'teacher-protofilio-exams', component: TeacherProtofilioExamsComponent, data: { description: 'azmy ahmed software engineer' } },
      { path: 'teacher-protofilio-classrooms', component: TeacherProtofilioClassroomsComponent, data: { description: 'azmy ahmed software engineer' } },
      { path: 'teacher-protofilio-sessions', component: TeacherProtofilioSessionsComponent, data: { description: 'azmy ahmed software engineer' } },
      { path: 'teacher-protofilio-about', component: TeacherProtofilioAboutComponent, data: { description: 'azmy ahmed software engineer' } },
      { path: 'teacher-protofilio-finalreviews', component: TeacherProtofilioFinalreviewsComponent, data: { description: 'azmy ahmed software engineer' } },
      { path: 'teacher-protofilio-class-features', component: TeacherProtofilioClassFeaturesComponent, data: { description: 'azmy ahmed software engineer' } },

    ]
  }
  ,
];
@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherProtofilioRoutingModule { }
