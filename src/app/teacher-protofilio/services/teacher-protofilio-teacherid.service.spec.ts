import { TestBed } from '@angular/core/testing';

import { TeacherProtofilioTeacheridService } from './teacher-protofilio-teacherid.service';

describe('TeacherProtofilioTeacheridService', () => {
  let service: TeacherProtofilioTeacheridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeacherProtofilioTeacheridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
