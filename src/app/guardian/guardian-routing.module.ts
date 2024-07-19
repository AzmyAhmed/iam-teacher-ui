import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardianComponent } from './guardian.component';

const routes: Routes = [{ path: '', component: GuardianComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuardianRoutingModule { }
