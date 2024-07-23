import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher.component';
import { TeacherHeaderComponent } from './teacher-header/teacher-header.component';
import { TeacherFooterComponent } from './teacher-footer/teacher-footer.component';
import { TeacherSidenavComponent } from './teacher-sidenav/teacher-sidenav.component';
import { TeacherSectionsComponent } from './teacher-sections/teacher-sections.component';
import { TeacherClassroomsComponent } from './teacher-classrooms/teacher-classrooms.component';
import { TeacherFeesComponent } from './teacher-fees/teacher-fees.component';
import { TeacherExamsComponent } from './teacher-exams/teacher-exams.component';
import { TeacherReportsComponent } from './teacher-reports/teacher-reports.component';
import { TeacherStaticsComponent } from './teacher-statics/teacher-statics.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { TranslateModule } from '@ngx-translate/core';
import { TeacherGeneralChartComponent } from './teacher-general-chart/teacher-general-chart.component';
import { SharedModule } from '../shared/shared.module';
import { TeacherNotificationComponent } from "./teacher-notification/teacher-notification.component";
import { TeacherAddStudentComponent } from "./teacher-add-student/teacher-add-student.component";
import { TeacherStudentsComponent } from "./teacher-students/teacher-students.component";
import { TeacherAttendanceComponent } from "./teacher-attendance/teacher-attendance.component";
import { TeacherExpensesRevenuesComponent } from "./teacher-expenses-revenues/teacher-expenses-revenues.component";
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TeacherComponent,
    TeacherHeaderComponent,
    TeacherFooterComponent,
    TeacherSidenavComponent,
    TeacherSectionsComponent,
    TeacherClassroomsComponent,
    TeacherFeesComponent,
    TeacherExamsComponent,
    TeacherReportsComponent,
    TeacherStaticsComponent,
    TeacherDashboardComponent,
  
    TeacherGeneralChartComponent

  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    TranslateModule,
    SharedModule,
    FormsModule,
    TeacherNotificationComponent,
    TeacherAddStudentComponent,
    TeacherStudentsComponent,
    TeacherAttendanceComponent,
    TeacherExpensesRevenuesComponent
]
})
export class TeacherModule { }
