import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteLiveViewComponent } from './website-live-view.component';

describe('WebsiteLiveViewComponent', () => {
  let component: WebsiteLiveViewComponent;
  let fixture: ComponentFixture<WebsiteLiveViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebsiteLiveViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebsiteLiveViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
