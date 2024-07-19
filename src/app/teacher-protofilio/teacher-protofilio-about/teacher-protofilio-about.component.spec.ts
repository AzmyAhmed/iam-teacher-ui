import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherProtofilioAboutComponent } from './teacher-protofilio-about.component';

describe('TeacherProtofilioAboutComponent', () => {
  let component: TeacherProtofilioAboutComponent;
  let fixture: ComponentFixture<TeacherProtofilioAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherProtofilioAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherProtofilioAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
