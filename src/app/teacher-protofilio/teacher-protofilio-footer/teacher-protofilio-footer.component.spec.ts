import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherProtofilioFooterComponent } from './teacher-protofilio-footer.component';

describe('TeacherProtofilioFooterComponent', () => {
  let component: TeacherProtofilioFooterComponent;
  let fixture: ComponentFixture<TeacherProtofilioFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherProtofilioFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherProtofilioFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
