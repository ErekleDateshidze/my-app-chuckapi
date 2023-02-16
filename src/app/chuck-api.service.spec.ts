import { TestBed } from '@angular/core/testing';

import { ChuckApiService } from './chuck-api.service';

describe('ChuckApiService', () => {
  let service: ChuckApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChuckApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
