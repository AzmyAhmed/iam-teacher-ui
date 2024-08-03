import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { adminAuthGuard } from './admin-auth.guard';
import { loginAuthGuard } from './guards/login-auth.guard';
import { WebsiteAboutusComponent } from '../website/website-aboutus/website-aboutus.component';
import { WebsiteFirstContentComponent } from '../website/website-first-content/website-first-content.component';
import { WebsiteLastContentComponent } from '../website/website-last-content/website-last-content.component';
import { WebsiteFeaturesComponent } from '../website/website-features/website-features.component';
import { WebsiteLandingpageComponent } from '../website/website-landingpage/website-landingpage.component';
import { PricingComponent } from '../website/pricing/pricing.component';
import { WebsiteClientsComponent } from '../website/website-clients/website-clients.component';
import { WebsiteContactusComponent } from '../website/website-contactus/website-contactus.component';
import { WebsiteFaqsComponent } from '../website/website-faqs/website-faqs.component';
import { WebsiteTeamComponent } from '../website/website-team/website-team.component';

const routes: Routes = [
  { path: 'admin-login', component: AdminLoginComponent, data: { description: 'azmy ahmed software engineer' }, canActivate: [adminAuthGuard] },
  {
    path: 'admin-main', component: AdminComponent, canActivate: [loginAuthGuard],
    children: [
      { path: '', redirectTo: 'website-landingpage', pathMatch: 'full' },
      { path: 'website-landingpage', component: WebsiteLandingpageComponent, data: { description: 'azmy ahmed software engineer' }, canActivate: [adminAuthGuard] },
      { path: 'website-first-content', component: WebsiteFirstContentComponent, data: { description: 'azmy ahmed software engineer' }, canActivate: [adminAuthGuard] },
      { path: 'admin-dashboard', component: AdminDashboardComponent, data: { description: 'azmy ahmed software engineer' }, canActivate: [adminAuthGuard] },
      { path: 'website-aboutus', component: WebsiteAboutusComponent, data: { description: 'azmy ahmed software engineer' }, canActivate: [adminAuthGuard] },
      { path: 'website-last-content', component: WebsiteLastContentComponent, data: { description: 'azmy ahmed software engineer' }, canActivate: [adminAuthGuard] },
      { path: 'website-features', component: WebsiteFeaturesComponent, data: { description: 'azmy ahmed software engineer' }, canActivate: [adminAuthGuard] },
      { path: 'website-clients', component: WebsiteClientsComponent, data: { description: 'azmy ahmed software engineer' } },
      { path: 'website-contactus', component: WebsiteContactusComponent, data: { description: 'azmy ahmed software engineer' } },
      { path: 'website-team', component: WebsiteTeamComponent, data: { description: 'azmy ahmed software engineer' } },
      { path: 'website-pricing', component: PricingComponent, data: { description: 'azmy ahmed software engineer' } },
      { path: 'website-faqs', component: WebsiteFaqsComponent, data: { description: 'azmy ahmed software engineer' } },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
