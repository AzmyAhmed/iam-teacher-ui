import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherLiveDemoComponent } from './teacher-live-demo.component';

describe('TeacherLiveDemoComponent', () => {
  let component: TeacherLiveDemoComponent;
  let fixture: ComponentFixture<TeacherLiveDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeacherLiveDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherLiveDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
