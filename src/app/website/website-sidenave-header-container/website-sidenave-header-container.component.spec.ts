import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteSidenaveHeaderContainerComponent } from './website-sidenave-header-container.component';

describe('WebsiteSidenaveHeaderContainerComponent', () => {
  let component: WebsiteSidenaveHeaderContainerComponent;
  let fixture: ComponentFixture<WebsiteSidenaveHeaderContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebsiteSidenaveHeaderContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebsiteSidenaveHeaderContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
