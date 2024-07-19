import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherProtofilioSendMessageComponent } from './teacher-protofilio-send-message.component';

describe('TeacherProtofilioSendMessageComponent', () => {
  let component: TeacherProtofilioSendMessageComponent;
  let fixture: ComponentFixture<TeacherProtofilioSendMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherProtofilioSendMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherProtofilioSendMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
