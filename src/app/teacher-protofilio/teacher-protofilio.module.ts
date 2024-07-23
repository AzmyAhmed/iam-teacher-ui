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
    TeacherProtofilioBookwithComponent
  ],
  exports: []
})
export class TeacherProtofilioModule { }
