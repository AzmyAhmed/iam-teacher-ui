import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherExpensesRevenuesComponent } from './teacher-expenses-revenues.component';

describe('TeacherExpensesRevenuesComponent', () => {
  let component: TeacherExpensesRevenuesComponent;
  let fixture: ComponentFixture<TeacherExpensesRevenuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherExpensesRevenuesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherExpensesRevenuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
