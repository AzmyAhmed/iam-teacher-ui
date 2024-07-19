import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { WebsiteComponent } from './website.component';
import { WebsiteHeaderComponent } from './website-header/website-header.component';
import { WebsiteFooterComponent } from './website-footer/website-footer.component';
import { WebsiteSidenavComponent } from './website-sidenav/website-sidenav.component';
import { WebsiteLandingpageComponent } from './website-landingpage/website-landingpage.component';
import { WebsiteLoginComponent } from './website-login/website-login.component';
import { WebsiteSignupComponent } from './website-signup/website-signup.component';
import { WebsiteForgetpasswordComponent } from './website-forgetpassword/website-forgetpassword.component';
import { WebsiteActivationcodeComponent } from './website-activationcode/website-activationcode.component';
import { WebsiteHomeComponent } from './website-home/website-home.component';
import { WebsiteAboutusComponent } from './website-aboutus/website-aboutus.component';
import { WebsiteBlogsComponent } from './website-blogs/website-blogs.component';
import { WebsiteContactusComponent } from './website-contactus/website-contactus.component';
import { WebsiteClientsComponent } from './website-clients/website-clients.component';
import { WebsiteProjectsComponent } from './website-projects/website-projects.component';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { WebsiteBookdemoComponent } from './website-bookdemo/website-bookdemo.component';
import { WebsiteSidenaveHeaderContainerComponent } from './website-sidenave-header-container/website-sidenave-header-container.component';
import { FormsComponent } from "../shared/component/forms/forms.component";
import { WebsiteSignupConfirmationComponent } from "./website-signup-confirmation/website-signup-confirmation.component";
import { WebsiteTermsConditionComponent } from "./website-terms-condition/website-terms-condition.component";


@NgModule({
  declarations: [
    WebsiteComponent,
    WebsiteHeaderComponent,
    WebsiteFooterComponent,
    WebsiteSidenavComponent,
    WebsiteLandingpageComponent,
    WebsiteLoginComponent,
    WebsiteSignupComponent,
    WebsiteForgetpasswordComponent,
    WebsiteActivationcodeComponent,
    WebsiteHomeComponent,
    WebsiteAboutusComponent,
    WebsiteBlogsComponent,
    WebsiteContactusComponent,
    WebsiteClientsComponent,
    WebsiteProjectsComponent,
    WebsiteSidenaveHeaderContainerComponent,
    WebsiteSignupConfirmationComponent

  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    SharedModule,
    TranslateModule,
    ReactiveFormsModule,
    FormsModule,
    WebsiteBookdemoComponent,
    FormsComponent,
    WebsiteTermsConditionComponent
],
  exports: []
})
export class WebsiteModule { }
