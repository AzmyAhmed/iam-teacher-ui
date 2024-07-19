import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherRecievedMessagesComponent } from './teacher-recieved-messages.component';

describe('TeacherRecievedMessagesComponent', () => {
  let component: TeacherRecievedMessagesComponent;
  let fixture: ComponentFixture<TeacherRecievedMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherRecievedMessagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherRecievedMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
