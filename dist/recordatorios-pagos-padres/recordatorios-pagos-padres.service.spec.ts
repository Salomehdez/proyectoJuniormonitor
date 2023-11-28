import { TestBed } from '@angular/core/testing';

import { RecordatoriosPagosPadresService } from './recordatorios-pagos-padres.service';

describe('RecordatoriosPagosPadresService', () => {
  let service: RecordatoriosPagosPadresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecordatoriosPagosPadresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
