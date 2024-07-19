import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherProtofilioSessionsComponent } from './teacher-protofilio-sessions.component';

describe('TeacherProtofilioSessionsComponent', () => {
  let component: TeacherProtofilioSessionsComponent;
  let fixture: ComponentFixture<TeacherProtofilioSessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherProtofilioSessionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherProtofilioSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
