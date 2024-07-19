import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteBlogsComponent } from './website-blogs.component';

describe('WebsiteBlogsComponent', () => {
  let component: WebsiteBlogsComponent;
  let fixture: ComponentFixture<WebsiteBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebsiteBlogsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebsiteBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
