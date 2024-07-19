import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherProtofilioSidenaveHeaderContainerComponent } from './teacher-protofilio-sidenave-header-container.component';

describe('TeacherProtofilioSidenaveHeaderContainerComponent', () => {
  let component: TeacherProtofilioSidenaveHeaderContainerComponent;
  let fixture: ComponentFixture<TeacherProtofilioSidenaveHeaderContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherProtofilioSidenaveHeaderContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherProtofilioSidenaveHeaderContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
