import { TestBed } from '@angular/core/testing';

import { ChuckapiService } from './chuckapi.service';

describe('ChuckapiService', () => {
  let service: ChuckapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChuckapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
