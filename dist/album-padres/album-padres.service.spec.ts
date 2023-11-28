import { TestBed } from '@angular/core/testing';

import { AlbumPadresService } from './album-padres.service';

describe('AlbumPadresService', () => {
  let service: AlbumPadresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbumPadresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
