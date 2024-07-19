import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherProtofilioExamsComponent } from './teacher-protofilio-exams.component';

describe('TeacherProtofilioExamsComponent', () => {
  let component: TeacherProtofilioExamsComponent;
  let fixture: ComponentFixture<TeacherProtofilioExamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherProtofilioExamsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherProtofilioExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
