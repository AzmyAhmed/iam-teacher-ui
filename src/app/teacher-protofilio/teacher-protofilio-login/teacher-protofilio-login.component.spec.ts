import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherProtofilioLoginComponent } from './teacher-protofilio-login.component';

describe('TeacherProtofilioLoginComponent', () => {
  let component: TeacherProtofilioLoginComponent;
  let fixture: ComponentFixture<TeacherProtofilioLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherProtofilioLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherProtofilioLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
