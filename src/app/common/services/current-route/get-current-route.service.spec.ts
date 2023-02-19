import { TestBed } from '@angular/core/testing';

import { GetCurrentRouteService } from './get-current-route.service';

describe('GetCurrentRouteService', () => {
  let service: GetCurrentRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCurrentRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
