import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherLiveDemoComponent } from './teacher-live-demo.component';

const routes: Routes = [{ path: '', component: TeacherLiveDemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherLiveDemoRoutingModule { }
