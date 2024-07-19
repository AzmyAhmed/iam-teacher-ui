import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteFaqsComponent } from './website-faqs.component';

describe('WebsiteFaqsComponent', () => {
  let component: WebsiteFaqsComponent;
  let fixture: ComponentFixture<WebsiteFaqsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebsiteFaqsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebsiteFaqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
