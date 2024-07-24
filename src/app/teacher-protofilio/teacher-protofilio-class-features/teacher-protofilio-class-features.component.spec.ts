import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherProtofilioClassFeaturesComponent } from './teacher-protofilio-class-features.component';

describe('TeacherProtofilioClassFeaturesComponent', () => {
  let component: TeacherProtofilioClassFeaturesComponent;
  let fixture: ComponentFixture<TeacherProtofilioClassFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherProtofilioClassFeaturesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherProtofilioClassFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
