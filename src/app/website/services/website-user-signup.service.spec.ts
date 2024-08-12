import { TestBed } from '@angular/core/testing';

import { WebsiteUserSignupService } from './website-user-signup.service';

describe('WebsiteUserSignupService', () => {
  let service: WebsiteUserSignupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebsiteUserSignupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
