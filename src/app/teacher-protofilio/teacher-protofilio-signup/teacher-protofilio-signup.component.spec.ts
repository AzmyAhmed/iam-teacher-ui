import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherProtofilioSignupComponent } from './teacher-protofilio-signup.component';

describe('TeacherProtofilioSignupComponent', () => {
  let component: TeacherProtofilioSignupComponent;
  let fixture: ComponentFixture<TeacherProtofilioSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherProtofilioSignupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherProtofilioSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
