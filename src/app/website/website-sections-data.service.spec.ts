import { TestBed } from '@angular/core/testing';

import { WebsiteSectionsDataService } from './website-sections-data.service';

describe('WebsiteSectionsDataService', () => {
  let service: WebsiteSectionsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebsiteSectionsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
