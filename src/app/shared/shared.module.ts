import { NgModule } from '@angular/core';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { SideNavComponent } from './component/side-nav/side-nav.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './component/modal/modal.component';
import { WebsiteBookdemoComponent } from "../website/website-bookdemo/website-bookdemo.component";
import { TeacherProtofilioAppointmentComponent } from "../teacher-protofilio/teacher-protofilio-appointment/teacher-protofilio-appointment.component";
import { TeacherProtofilioBookwithComponent } from "../teacher-protofilio/teacher-protofilio-bookwith/teacher-protofilio-bookwith.component";
import { TeacherNotificationComponent } from "../teacher/teacher-notification/teacher-notification.component";
import { TeacherAddStudentComponent } from "../teacher/teacher-add-student/teacher-add-student.component";
import { FormsComponent } from './component/forms/forms.component';


@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        SideNavComponent,
        ModalComponent
    ],
    imports: [
    RouterModule,
    TranslateModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    WebsiteBookdemoComponent,
    TeacherProtofilioAppointmentComponent,
    TeacherProtofilioBookwithComponent,
    TeacherNotificationComponent,
    TeacherAddStudentComponent,
    FormsComponent
],
    exports: [HeaderComponent, FooterComponent,
        SideNavComponent, ModalComponent]
})
export class SharedModule { }
