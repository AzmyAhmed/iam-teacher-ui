import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherProtofilioClassViewComponent } from './teacher-protofilio-class-view.component';

describe('TeacherProtofilioClassViewComponent', () => {
  let component: TeacherProtofilioClassViewComponent;
  let fixture: ComponentFixture<TeacherProtofilioClassViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherProtofilioClassViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherProtofilioClassViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
