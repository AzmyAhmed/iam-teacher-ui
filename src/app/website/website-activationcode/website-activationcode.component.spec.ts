import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteActivationcodeComponent } from './website-activationcode.component';

describe('WebsiteActivationcodeComponent', () => {
  let component: WebsiteActivationcodeComponent;
  let fixture: ComponentFixture<WebsiteActivationcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebsiteActivationcodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebsiteActivationcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
