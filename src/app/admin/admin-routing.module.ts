import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { adminAuthGuard } from './admin-auth.guard';
import { loginAuthGuard } from './guards/login-auth.guard';

const routes: Routes = [
  { path: 'admin-login', component: AdminLoginComponent, data: { description: 'azmy ahmed software engineer' }, canActivate: [adminAuthGuard] },
  {
    path: 'admin-main', component: AdminComponent, canActivate: [loginAuthGuard],
    children: [
      { path: '', redirectTo: 'admin-dashboard', pathMatch: 'full' },
      { path: 'admin-dashboard', component: AdminDashboardComponent, data: { description: 'azmy ahmed software engineer' }, canActivate: [adminAuthGuard] },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
