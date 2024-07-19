import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteSidenavComponent } from './website-sidenav.component';

describe('WebsiteSidenavComponent', () => {
  let component: WebsiteSidenavComponent;
  let fixture: ComponentFixture<WebsiteSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebsiteSidenavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebsiteSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
