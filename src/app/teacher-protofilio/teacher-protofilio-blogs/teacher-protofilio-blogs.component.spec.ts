import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherProtofilioBlogsComponent } from './teacher-protofilio-blogs.component';

describe('TeacherProtofilioBlogsComponent', () => {
  let component: TeacherProtofilioBlogsComponent;
  let fixture: ComponentFixture<TeacherProtofilioBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherProtofilioBlogsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherProtofilioBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
