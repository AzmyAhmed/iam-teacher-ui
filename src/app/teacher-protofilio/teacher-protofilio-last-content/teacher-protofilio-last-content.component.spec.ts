import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherProtofilioLastContentComponent } from './teacher-protofilio-last-content.component';

describe('TeacherProtofilioLastContentComponent', () => {
  let component: TeacherProtofilioLastContentComponent;
  let fixture: ComponentFixture<TeacherProtofilioLastContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherProtofilioLastContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherProtofilioLastContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
