import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherStaticsComponent } from './teacher-statics.component';

describe('TeacherStaticsComponent', () => {
  let component: TeacherStaticsComponent;
  let fixture: ComponentFixture<TeacherStaticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeacherStaticsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherStaticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
