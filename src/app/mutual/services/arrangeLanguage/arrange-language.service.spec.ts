import { TestBed } from '@angular/core/testing';

import { ArrangeLanguageService } from './arrange-language.service';

describe('ArrangeLanguageService', () => {
  let service: ArrangeLanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArrangeLanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
