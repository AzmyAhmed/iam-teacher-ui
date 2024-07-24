import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherProtofilioGuideComponent } from './teacher-protofilio-guide.component';

describe('TeacherProtofilioGuideComponent', () => {
  let component: TeacherProtofilioGuideComponent;
  let fixture: ComponentFixture<TeacherProtofilioGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherProtofilioGuideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherProtofilioGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
