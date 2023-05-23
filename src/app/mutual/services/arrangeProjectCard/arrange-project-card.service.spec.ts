import { TestBed } from '@angular/core/testing';

import { ArrangeProjectCardService } from './arrange-project-card.service';

describe('ArrangeProjectCardService', () => {
  let service: ArrangeProjectCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArrangeProjectCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
