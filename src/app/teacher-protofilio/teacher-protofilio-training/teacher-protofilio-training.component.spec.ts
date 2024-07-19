import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherProtofilioTrainingComponent } from './teacher-protofilio-training.component';

describe('TeacherProtofilioTrainingComponent', () => {
  let component: TeacherProtofilioTrainingComponent;
  let fixture: ComponentFixture<TeacherProtofilioTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherProtofilioTrainingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherProtofilioTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
