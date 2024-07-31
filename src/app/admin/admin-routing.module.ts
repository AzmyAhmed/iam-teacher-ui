import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { adminAuthGuard } from './admin-auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'admin-login', pathMatch: 'full' },
  {
    path: '', component: AdminComponent, children: [
      { path: 'admin-login', component: AdminLoginComponent, data: { description: 'azmy ahmed software engineer' }, canActivate: [adminAuthGuard] },
      { path: 'admin-dashboard', component: AdminDashboardComponent, data: { description: 'azmy ahmed software engineer' }, canActivate: [adminAuthGuard] },

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
