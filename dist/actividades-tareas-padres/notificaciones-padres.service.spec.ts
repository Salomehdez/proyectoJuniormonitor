import { TestBed } from '@angular/core/testing';

import { NotificacionesPadresService } from './notificaciones-padres.service';

describe('NotificacionesPadresService', () => {
  let service: NotificacionesPadresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificacionesPadresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
