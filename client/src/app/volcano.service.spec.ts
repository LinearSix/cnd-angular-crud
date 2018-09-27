import { TestBed } from '@angular/core/testing';

import { VolcanoService } from './volcano.service';

describe('VolcanoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VolcanoService = TestBed.get(VolcanoService);
    expect(service).toBeTruthy();
  });
});
