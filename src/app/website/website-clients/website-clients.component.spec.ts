import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteClientsComponent } from './website-clients.component';

describe('WebsiteClientsComponent', () => {
  let component: WebsiteClientsComponent;
  let fixture: ComponentFixture<WebsiteClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebsiteClientsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebsiteClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
