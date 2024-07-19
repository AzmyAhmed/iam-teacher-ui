import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebsiteComponent } from './website.component';
import { SharedModule } from '../shared/shared.module';
import { WebsiteLandingpageComponent } from './website-landingpage/website-landingpage.component';
import { WebsiteAboutusComponent } from './website-aboutus/website-aboutus.component';
import { WebsiteClientsComponent } from './website-clients/website-clients.component';
import { WebsiteProjectsComponent } from './website-projects/website-projects.component';
import { WebsiteBlogsComponent } from './website-blogs/website-blogs.component';
import { WebsiteContactusComponent } from './website-contactus/website-contactus.component';
import { WebsiteViewComponent } from './website-view/website-view.component';
import { WebsiteFeaturesComponent } from './website-features/website-features.component';
import { WebsiteTeamComponent } from './website-team/website-team.component';
import { WebsiteSignupComponent } from './website-signup/website-signup.component';
const routes: Routes = [
  { path: '', redirectTo: 'website-landingpage', pathMatch: 'full' },
  {
    path: '', component: WebsiteComponent, children: [
      { path: 'website-landingpage', component: WebsiteLandingpageComponent, data: { description: 'azmy ahmed software engineer' } },
      { path: 'website-aboutus', component: WebsiteAboutusComponent, data: { description: 'azmy ahmed software engineer' } },
      { path: 'website-features', component: WebsiteFeaturesComponent, data: { description: 'azmy ahmed software engineer' } },
      { path: 'website-clients', component: WebsiteClientsComponent, data: { description: 'azmy ahmed software engineer' } },
      { path: 'website-projects', component: WebsiteProjectsComponent, data: { description: 'azmy ahmed software engineer' } },
      { path: 'website-blogs', component: WebsiteBlogsComponent, data: { description: 'azmy ahmed software engineer' } },
      { path: 'website-view', component: WebsiteViewComponent, data: { description: 'azmy ahmed software engineer' } },
      { path: 'website-contactus', component: WebsiteContactusComponent, data: { description: 'azmy ahmed software engineer' } },
      { path: 'website-team', component: WebsiteTeamComponent, data: { description: 'azmy ahmed software engineer' } },
      { path: 'website-signup', component: WebsiteSignupComponent, data: { description: 'azmy ahmed software engineer' } },

    ]
  }
  ,
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
