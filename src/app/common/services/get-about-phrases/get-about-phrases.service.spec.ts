import { TestBed } from '@angular/core/testing';

import { GetAboutPhrasesService } from './get-about-phrases.service';

describe('GetAboutPhrasesService', () => {
  let service: GetAboutPhrasesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAboutPhrasesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
