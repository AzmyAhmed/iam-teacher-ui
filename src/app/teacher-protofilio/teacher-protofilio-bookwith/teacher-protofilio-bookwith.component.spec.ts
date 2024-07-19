import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherProtofilioBookwithComponent } from './teacher-protofilio-bookwith.component';

describe('TeacherProtofilioBookwithComponent', () => {
  let component: TeacherProtofilioBookwithComponent;
  let fixture: ComponentFixture<TeacherProtofilioBookwithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherProtofilioBookwithComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherProtofilioBookwithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
