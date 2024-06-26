import { TestBed } from '@angular/core/testing';

import { ThapaswiService } from './thapaswi.service';

describe('ThapaswiService', () => {
  let service: ThapaswiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThapaswiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
