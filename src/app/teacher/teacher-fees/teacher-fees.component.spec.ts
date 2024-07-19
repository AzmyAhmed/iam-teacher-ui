import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherFeesComponent } from './teacher-fees.component';

describe('TeacherFeesComponent', () => {
  let component: TeacherFeesComponent;
  let fixture: ComponentFixture<TeacherFeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeacherFeesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
