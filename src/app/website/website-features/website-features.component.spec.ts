import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteFeaturesComponent } from './website-features.component';

describe('WebsiteFeaturesComponent', () => {
  let component: WebsiteFeaturesComponent;
  let fixture: ComponentFixture<WebsiteFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebsiteFeaturesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebsiteFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
