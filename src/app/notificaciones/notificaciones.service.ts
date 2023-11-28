// notificaciones.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificacionesService {
  private apiUrl = 'http://localhost:8000/api/notificaciones/';

  constructor(private http: HttpClient) {}

  obtenerTareas(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8000/api/tareas/');
  }

  obtenerActividades(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8000/api/actividades/');
  }

  obtenerGrupos(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8000/api/grupos/');
  }

  registrarNotificacion(notificacion: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, notificacion);
  }
}
