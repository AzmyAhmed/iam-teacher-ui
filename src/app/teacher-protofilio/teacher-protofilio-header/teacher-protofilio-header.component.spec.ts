import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherProtofilioHeaderComponent } from './teacher-protofilio-header.component';

describe('TeacherProtofilioHeaderComponent', () => {
  let component: TeacherProtofilioHeaderComponent;
  let fixture: ComponentFixture<TeacherProtofilioHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherProtofilioHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherProtofilioHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
