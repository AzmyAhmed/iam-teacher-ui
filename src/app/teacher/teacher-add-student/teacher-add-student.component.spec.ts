import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherAddStudentComponent } from './teacher-add-student.component';

describe('TeacherAddStudentComponent', () => {
  let component: TeacherAddStudentComponent;
  let fixture: ComponentFixture<TeacherAddStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherAddStudentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherAddStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
