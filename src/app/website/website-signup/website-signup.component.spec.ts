import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteSignupComponent } from './website-signup.component';

describe('WebsiteSignupComponent', () => {
  let component: WebsiteSignupComponent;
  let fixture: ComponentFixture<WebsiteSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebsiteSignupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebsiteSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
