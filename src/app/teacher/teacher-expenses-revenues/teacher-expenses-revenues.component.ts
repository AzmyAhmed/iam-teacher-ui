import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-teacher-expenses-revenues',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './teacher-expenses-revenues.component.html',
  styleUrl: './teacher-expenses-revenues.component.css'
})
export class TeacherExpensesRevenuesComponent {
  @Input() sections: any = [];

}
