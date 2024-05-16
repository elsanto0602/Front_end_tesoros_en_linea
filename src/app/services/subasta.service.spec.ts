import { TestBed } from '@angular/core/testing';

import { SubastaService } from './subasta.service';

describe('SubastaService', () => {
  let service: SubastaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubastaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
