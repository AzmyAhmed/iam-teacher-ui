import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteProjectsComponent } from './website-projects.component';

describe('WebsiteProjectsComponent', () => {
  let component: WebsiteProjectsComponent;
  let fixture: ComponentFixture<WebsiteProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebsiteProjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebsiteProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
