import { TestBed, inject } from '@angular/core/testing';

import { DummydataService } from './dummydata.service';

describe('DummydataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DummydataService]
    });
  });

  it('should be created', inject([DummydataService], (service: DummydataService) => {
    expect(service).toBeTruthy();
  }));
});
