import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLinksStpComponent } from './admin-links-stp.component';

describe('AdminLinksStpComponent', () => {
  let component: AdminLinksStpComponent;
  let fixture: ComponentFixture<AdminLinksStpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminLinksStpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminLinksStpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
