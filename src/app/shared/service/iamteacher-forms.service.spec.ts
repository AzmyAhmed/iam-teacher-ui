import { TestBed } from '@angular/core/testing';

import { IamteacherFormsService } from './iamteacher-forms.service';

describe('IamteacherFormsService', () => {
  let service: IamteacherFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IamteacherFormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
