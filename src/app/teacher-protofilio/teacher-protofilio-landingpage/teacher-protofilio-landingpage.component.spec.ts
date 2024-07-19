import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherProtofilioLandingpageComponent } from './teacher-protofilio-landingpage.component';

describe('TeacherProtofilioLandingpageComponent', () => {
  let component: TeacherProtofilioLandingpageComponent;
  let fixture: ComponentFixture<TeacherProtofilioLandingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherProtofilioLandingpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherProtofilioLandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
