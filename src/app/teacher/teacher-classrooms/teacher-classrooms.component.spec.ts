import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherClassroomsComponent } from './teacher-classrooms.component';

describe('TeacherClassroomsComponent', () => {
  let component: TeacherClassroomsComponent;
  let fixture: ComponentFixture<TeacherClassroomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeacherClassroomsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherClassroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
