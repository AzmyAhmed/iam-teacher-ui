import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherGeneralChartComponent } from './teacher-general-chart.component';

describe('TeacherGeneralChartComponent', () => {
  let component: TeacherGeneralChartComponent;
  let fixture: ComponentFixture<TeacherGeneralChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherGeneralChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherGeneralChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
