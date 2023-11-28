// actividades.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ActividadesService {
  private apiUrl = 'http://localhost:8000/api/actividades/';

  constructor(private http: HttpClient) {}

  registrarActividad(actividad: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, actividad);
  }
}
