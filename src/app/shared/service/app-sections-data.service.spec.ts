import { TestBed } from '@angular/core/testing';

import { AppSectionsDataService } from './app-sections-data.service';

describe('AppSectionsDataService', () => {
  let service: AppSectionsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppSectionsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
