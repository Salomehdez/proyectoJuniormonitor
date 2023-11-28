import { TestBed } from '@angular/core/testing';

import { InfantesService } from './infantes.service';

describe('InfantesService', () => {
  let service: InfantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
