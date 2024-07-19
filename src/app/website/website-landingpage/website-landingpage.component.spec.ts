import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteLandingpageComponent } from './website-landingpage.component';

describe('WebsiteLandingpageComponent', () => {
  let component: WebsiteLandingpageComponent;
  let fixture: ComponentFixture<WebsiteLandingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebsiteLandingpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebsiteLandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
