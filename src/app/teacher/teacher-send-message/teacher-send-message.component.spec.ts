import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherSendMessageComponent } from './teacher-send-message.component';

describe('TeacherSendMessageComponent', () => {
  let component: TeacherSendMessageComponent;
  let fixture: ComponentFixture<TeacherSendMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherSendMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherSendMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
