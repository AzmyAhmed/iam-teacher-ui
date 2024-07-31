import { TestBed } from '@angular/core/testing';

import { WebsiteFaqsService } from './website-faqs.service';

describe('WebsiteFaqsService', () => {
  let service: WebsiteFaqsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebsiteFaqsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
