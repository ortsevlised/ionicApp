import { TestBed } from '@angular/core/testing';

import { QuotesProviderService } from './quotes-provider.service';

describe('QuotesProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuotesProviderService = TestBed.get(QuotesProviderService);
    expect(service).toBeTruthy();
  });
});
