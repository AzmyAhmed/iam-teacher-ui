import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherProtofilioRoutingModule } from './teacher-protofilio-routing.module';
import { TeacherProtofilioComponent } from './teacher-protofilio.component';
import { TeacherProtofilioSidenavComponent } from "./teacher-protofilio-sidenav/teacher-protofilio-sidenav.component";
import { TranslateModule } from '@ngx-translate/core';
import { TeacherProtofilioHeaderComponent } from './teacher-protofilio-header/teacher-protofilio-header.component';
import { TeacherProtofilioFooterComponent } from "./teacher-protofilio-footer/teacher-protofilio-footer.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeacherProtofilioLandingpageComponent } from './teacher-protofilio-landingpage/teacher-protofilio-landingpage.component';
import { SharedModule } from "../shared/shared.module";
import { TeacherProtofilioAppointmentComponent } from "./teacher-protofilio-appointment/teacher-protofilio-appointment.component";
import { TeacherProtofilioBookwithComponent } from './teacher-protofilio-bookwith/teacher-protofilio-bookwith.component';
import { TeacherProtofilioFirstContentComponent } from "./teacher-protofilio-first-content/teacher-protofilio-first-content.component";
import { TeacherProtofilioAboutComponent } from "./teacher-protofilio-about/teacher-protofilio-about.component";
import { TeacherProtofilioClassroomsComponent } from "./teacher-protofilio-classrooms/teacher-protofilio-classrooms.component";
import { TeacherProtofilioLastContentComponent } from "./teacher-protofilio-last-content/teacher-protofilio-last-content.component";
import { TeacherProtofilioClassFeaturesComponent } from "./teacher-protofilio-class-features/teacher-protofilio-class-features.component";
import { TeacherProtofilioExamsComponent } from "./teacher-protofilio-exams/teacher-protofilio-exams.component";
import { TeacherProtofilioFinalreviewsComponent } from "./teacher-protofilio-finalreviews/teacher-protofilio-finalreviews.component";


@NgModule({
  declarations: [
    TeacherProtofilioComponent,
    TeacherProtofilioSidenavComponent,
    TeacherProtofilioHeaderComponent,
    TeacherProtofilioLandingpageComponent,
    TeacherProtofilioFooterComponent,


  ],
  imports: [
    CommonModule,
    TeacherProtofilioRoutingModule,
    TranslateModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    TeacherProtofilioAppointmentComponent,
    TeacherProtofilioBookwithComponent,
    TeacherProtofilioFirstContentComponent,
    TeacherProtofilioAboutComponent,
    TeacherProtofilioClassroomsComponent,
    TeacherProtofilioLastContentComponent,
    TeacherProtofilioClassFeaturesComponent,
    TeacherProtofilioExamsComponent,
    TeacherProtofilioFinalreviewsComponent
],
  exports: []
})
export class TeacherProtofilioModule { }
