import { TestBed } from '@angular/core/testing';

import { CompetitionViewService } from './competition-view.service';

describe('CompetitionViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompetitionViewService = TestBed.get(CompetitionViewService);
    expect(service).toBeTruthy();
  });
});
