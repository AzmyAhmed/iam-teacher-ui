import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteForgetpasswordComponent } from './website-forgetpassword.component';

describe('WebsiteForgetpasswordComponent', () => {
  let component: WebsiteForgetpasswordComponent;
  let fixture: ComponentFixture<WebsiteForgetpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebsiteForgetpasswordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebsiteForgetpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
