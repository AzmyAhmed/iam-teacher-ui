import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteTermsConditionComponent } from './website-terms-condition.component';

describe('WebsiteTermsConditionComponent', () => {
  let component: WebsiteTermsConditionComponent;
  let fixture: ComponentFixture<WebsiteTermsConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebsiteTermsConditionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebsiteTermsConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
