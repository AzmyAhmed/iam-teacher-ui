import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherProtofilioFirstContentComponent } from './teacher-protofilio-first-content.component';

describe('TeacherProtofilioFirstContentComponent', () => {
  let component: TeacherProtofilioFirstContentComponent;
  let fixture: ComponentFixture<TeacherProtofilioFirstContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherProtofilioFirstContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherProtofilioFirstContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
