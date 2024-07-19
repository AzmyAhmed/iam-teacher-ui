import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteBookdemoComponent } from './website-bookdemo.component';

describe('WebsiteBookdemoComponent', () => {
  let component: WebsiteBookdemoComponent;
  let fixture: ComponentFixture<WebsiteBookdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebsiteBookdemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebsiteBookdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
