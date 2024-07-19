import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherLiveDemoRoutingModule } from './teacher-live-demo-routing.module';
import { TeacherLiveDemoComponent } from './teacher-live-demo.component';


@NgModule({
  declarations: [
    TeacherLiveDemoComponent
  ],
  imports: [
    CommonModule,
    TeacherLiveDemoRoutingModule
  ]
})
export class TeacherLiveDemoModule { }
