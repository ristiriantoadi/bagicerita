import { TestBed } from '@angular/core/testing';

import { CeritaService } from './cerita.service';

describe('CeritaService', () => {
  let service: CeritaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CeritaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
