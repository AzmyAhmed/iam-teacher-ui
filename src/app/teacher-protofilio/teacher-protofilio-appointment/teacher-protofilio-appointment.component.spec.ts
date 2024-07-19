import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherProtofilioAppointmentComponent } from './teacher-protofilio-appointment.component';

describe('TeacherProtofilioAppointmentComponent', () => {
  let component: TeacherProtofilioAppointmentComponent;
  let fixture: ComponentFixture<TeacherProtofilioAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherProtofilioAppointmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherProtofilioAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
