import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherClassSchdulingComponent } from './teacher-class-schduling.component';

describe('TeacherClassSchdulingComponent', () => {
  let component: TeacherClassSchdulingComponent;
  let fixture: ComponentFixture<TeacherClassSchdulingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherClassSchdulingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherClassSchdulingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
