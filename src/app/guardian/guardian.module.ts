import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuardianRoutingModule } from './guardian-routing.module';
import { GuardianComponent } from './guardian.component';


@NgModule({
  declarations: [
    GuardianComponent
  ],
  imports: [
    CommonModule,
    GuardianRoutingModule
  ]
})
export class GuardianModule { }
