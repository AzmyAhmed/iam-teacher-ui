import { TestBed } from '@angular/core/testing';

import { WebsiteBookdemoService } from './website-bookdemo.service';

describe('WebsiteBookdemoService', () => {
  let service: WebsiteBookdemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebsiteBookdemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
