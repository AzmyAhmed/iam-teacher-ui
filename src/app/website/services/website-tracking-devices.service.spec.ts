import { TestBed } from '@angular/core/testing';

import { WebsiteTrackingDevicesService } from './website-tracking-devices.service';

describe('WebsiteTrackingDevicesService', () => {
  let service: WebsiteTrackingDevicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebsiteTrackingDevicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
