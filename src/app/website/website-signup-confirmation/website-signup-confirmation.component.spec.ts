import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteSignupConfirmationComponent } from './website-signup-confirmation.component';

describe('WebsiteSignupConfirmationComponent', () => {
  let component: WebsiteSignupConfirmationComponent;
  let fixture: ComponentFixture<WebsiteSignupConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebsiteSignupConfirmationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebsiteSignupConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
