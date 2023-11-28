import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordatoriosPagosPadresComponent } from './recordatorios-pagos-padres.component';

describe('RecordatoriosPagosPadresComponent', () => {
  let component: RecordatoriosPagosPadresComponent;
  let fixture: ComponentFixture<RecordatoriosPagosPadresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecordatoriosPagosPadresComponent]
    });
    fixture = TestBed.createComponent(RecordatoriosPagosPadresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
