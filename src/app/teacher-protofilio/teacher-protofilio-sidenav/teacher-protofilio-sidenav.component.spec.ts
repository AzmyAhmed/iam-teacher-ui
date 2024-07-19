import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherProtofilioSidenavComponent } from './teacher-protofilio-sidenav.component';

describe('TeacherProtofilioSidenavComponent', () => {
  let component: TeacherProtofilioSidenavComponent;
  let fixture: ComponentFixture<TeacherProtofilioSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherProtofilioSidenavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherProtofilioSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
