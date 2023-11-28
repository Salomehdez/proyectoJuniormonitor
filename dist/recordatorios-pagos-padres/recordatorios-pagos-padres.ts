// src/app/recordatorios-pagos-padres/recordatorios-pagos-padres.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecordatoriosPagosPadresService {
  private apiUrl = 'http://127.0.0.1:8000/api/pagos/';  // Ajusta con la ruta adecuada de tu API

  constructor(private http: HttpClient) {}

  getRecordatoriosPagosPadres(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
