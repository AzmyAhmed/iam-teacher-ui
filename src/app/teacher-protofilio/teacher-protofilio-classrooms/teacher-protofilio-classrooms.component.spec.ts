import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherProtofilioClassroomsComponent } from './teacher-protofilio-classrooms.component';

describe('TeacherProtofilioClassroomsComponent', () => {
  let component: TeacherProtofilioClassroomsComponent;
  let fixture: ComponentFixture<TeacherProtofilioClassroomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherProtofilioClassroomsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherProtofilioClassroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
