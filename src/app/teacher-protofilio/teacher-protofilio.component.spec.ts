import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherProtofilioComponent } from './teacher-protofilio.component';

describe('TeacherProtofilioComponent', () => {
  let component: TeacherProtofilioComponent;
  let fixture: ComponentFixture<TeacherProtofilioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeacherProtofilioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherProtofilioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
