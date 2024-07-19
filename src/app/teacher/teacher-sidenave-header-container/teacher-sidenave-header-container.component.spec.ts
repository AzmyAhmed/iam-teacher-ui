import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherSidenaveHeaderContainerComponent } from './teacher-sidenave-header-container.component';

describe('TeacherSidenaveHeaderContainerComponent', () => {
  let component: TeacherSidenaveHeaderContainerComponent;
  let fixture: ComponentFixture<TeacherSidenaveHeaderContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherSidenaveHeaderContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherSidenaveHeaderContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
