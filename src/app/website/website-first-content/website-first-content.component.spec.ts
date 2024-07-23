import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteFirstContentComponent } from './website-first-content.component';

describe('WebsiteFirstContentComponent', () => {
  let component: WebsiteFirstContentComponent;
  let fixture: ComponentFixture<WebsiteFirstContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebsiteFirstContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebsiteFirstContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
