// src/app/recordatorios-pagos-padres/recordatorios-pagos-padres.component.ts
import { Component, OnInit } from '@angular/core';
import { RecordatoriosPagosPadresService } from './recordatorios-pagos-padres.service';

@Component({
  selector: 'app-recordatorios-pagos-padres',
  templateUrl: './recordatorios-pagos-padres.component.html',
  styleUrls: ['./recordatorios-pagos-padres.component.css'],  // Ajusta según tus necesidades
})
export class RecordatoriosPagosPadresComponent implements OnInit {
  recordatorios: any[] = [];

  constructor(private recordatoriosService: RecordatoriosPagosPadresService) {}

  ngOnInit(): void {
    this.loadRecordatorios();
  }

  loadRecordatorios() {
    this.recordatoriosService.getRecordatoriosPagosPadres().subscribe(
      (data) => {
        this.recordatorios = data;
      },
      (error) => {
        console.error('Error al cargar los recordatorios de pagos', error);
      }
    );
  }
  cancelarRegistro() {
    // Lógica para cancelar el registro, por ejemplo, redireccionar a otra página
    console.log('Registro cancelado');
    // No agregues aquí la lógica de redirección si no deseas que se ejecute al cancelar
  }


}
