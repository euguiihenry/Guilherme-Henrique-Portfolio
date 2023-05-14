import { TestBed } from '@angular/core/testing';

import { ArrangeLoadingService } from './arrange-loading.service';

describe('ArrangeLoadingService', () => {
  let service: ArrangeLoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArrangeLoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
