import { TestBed } from '@angular/core/testing';

import { VolcanoService } from './volcano.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('VolcanoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: VolcanoService = TestBed.get(VolcanoService);
    expect(service).toBeTruthy();
  });
});
