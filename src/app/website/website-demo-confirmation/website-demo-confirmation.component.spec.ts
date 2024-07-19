import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteDemoConfirmationComponent } from './website-demo-confirmation.component';

describe('WebsiteDemoConfirmationComponent', () => {
  let component: WebsiteDemoConfirmationComponent;
  let fixture: ComponentFixture<WebsiteDemoConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebsiteDemoConfirmationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebsiteDemoConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
