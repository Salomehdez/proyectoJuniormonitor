// album-padres.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumPadresService {
  private apiUrl = 'http://localhost:8000/api/'; // Ajusta la URL según tu configuración

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}album/`);
  }

  getGrupos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}grupos/`);
  }
}
