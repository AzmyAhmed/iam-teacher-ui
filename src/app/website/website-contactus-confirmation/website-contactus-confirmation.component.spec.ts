import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteContactusConfirmationComponent } from './website-contactus-confirmation.component';

describe('WebsiteContactusConfirmationComponent', () => {
  let component: WebsiteContactusConfirmationComponent;
  let fixture: ComponentFixture<WebsiteContactusConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebsiteContactusConfirmationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebsiteContactusConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
