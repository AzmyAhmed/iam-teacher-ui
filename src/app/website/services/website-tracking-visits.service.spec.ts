import { TestBed } from '@angular/core/testing';

import { WebsiteTrackingVisitsService } from './website-tracking-visits.service';

describe('WebsiteTrackingVisitsService', () => {
  let service: WebsiteTrackingVisitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebsiteTrackingVisitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
