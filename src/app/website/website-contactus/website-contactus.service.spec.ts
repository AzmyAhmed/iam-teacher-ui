import { TestBed } from '@angular/core/testing';

import { WebsiteContactusService } from './website-contactus.service';

describe('WebsiteContactusService', () => {
  let service: WebsiteContactusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebsiteContactusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
