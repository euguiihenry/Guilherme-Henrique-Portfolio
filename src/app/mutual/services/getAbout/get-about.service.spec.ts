import { TestBed } from '@angular/core/testing';

import { GetAboutService } from './get-about.service';

describe('GetAboutService', () => {
  let service: GetAboutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAboutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
