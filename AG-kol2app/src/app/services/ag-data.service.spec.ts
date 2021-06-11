import { TestBed } from '@angular/core/testing';

import { AGDataService } from './ag-data.service';

describe('AGDataService', () => {
  let service: AGDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AGDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
