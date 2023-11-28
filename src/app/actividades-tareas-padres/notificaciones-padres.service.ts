// notificaciones-padres.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificacionesPadresService {
  private apiUrl = 'http://localhost:8000/api/notificaciones/';

  constructor(private http: HttpClient) {}

  getNotificacionesPadres(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Agrega métodos según sea necesario, como agregar, actualizar, eliminar, etc.
}	
