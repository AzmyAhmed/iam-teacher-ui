import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteLastContentComponent } from './website-last-content.component';

describe('WebsiteLastContentComponent', () => {
  let component: WebsiteLastContentComponent;
  let fixture: ComponentFixture<WebsiteLastContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebsiteLastContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebsiteLastContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
