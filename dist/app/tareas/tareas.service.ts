// tareas.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TareasService {
  private apiUrl = 'http://localhost:8000/api/tareas/';

  constructor(private http: HttpClient) {}

  registrarTarea(tarea: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, tarea);
  }
}
