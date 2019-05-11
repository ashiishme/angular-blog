import { TestBed } from '@angular/core/testing';

import { BlogApiService } from './blog-api.service';

describe('BlogApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlogApiService = TestBed.get(BlogApiService);
    expect(service).toBeTruthy();
  });
});
