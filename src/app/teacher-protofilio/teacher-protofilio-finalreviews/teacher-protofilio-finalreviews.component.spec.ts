import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherProtofilioFinalreviewsComponent } from './teacher-protofilio-finalreviews.component';

describe('TeacherProtofilioFinalreviewsComponent', () => {
  let component: TeacherProtofilioFinalreviewsComponent;
  let fixture: ComponentFixture<TeacherProtofilioFinalreviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherProtofilioFinalreviewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherProtofilioFinalreviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
