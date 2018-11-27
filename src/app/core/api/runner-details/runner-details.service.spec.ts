import { TestBed } from '@angular/core/testing';

import { RunnerDetailsService } from './runner-details.service';

describe('RunnerDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RunnerDetailsService = TestBed.get(RunnerDetailsService);
    expect(service).toBeTruthy();
  });
});
