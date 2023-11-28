import { TestBed } from '@angular/core/testing';

import { RegistrarJardinService } from './registrar-jardin.service';

describe('RegistrarJardinService', () => {
  let service: RegistrarJardinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrarJardinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
