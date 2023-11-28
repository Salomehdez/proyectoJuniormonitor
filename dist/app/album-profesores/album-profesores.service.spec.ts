import { TestBed } from '@angular/core/testing';

import { AlbumProfesoresService } from './album-profesores.service';

describe('AlbumProfesoresService', () => {
  let service: AlbumProfesoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbumProfesoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
