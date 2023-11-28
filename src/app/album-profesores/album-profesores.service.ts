// src/app/album-profesores/album-profesores.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlbumProfesoresService {
  private apiUrl = 'http://localhost:8000/api/album'; // Ajusta la URL de la API según tu configuración
  private photoUrl = 'http://localhost:8000/media/album_fotos'; // Ajusta la ruta de las fotos según tu configuración

  constructor(private http: HttpClient) {}

  // Método para obtener álbumes desde la API
  getAlbums(): Observable<any> {
    return this.http.get(`${this.apiUrl}/albums`);
  }

  // Método para obtener fotos de un álbum específico
  getAlbumPhotos(albumId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/albums/${albumId}/photos`);
  }

  // Método para enviar fotos a un álbum específico
  enviarFotos(albumId: number, fotos: any): Observable<any> {
    const formData = new FormData();
    formData.append('albumId', albumId.toString());

    for (let i = 0; i < fotos.length; i++) {
      formData.append('fotos', fotos[i]);
    }

    return this.http.post(`${this.apiUrl}/albums/${albumId}/photos`, formData);
  }

  // Método para obtener la URL completa de una foto
  getPhotoUrl(photoName: string): string {
    return `${this.photoUrl}/${photoName}`;
  }

  // Puedes agregar más métodos según sea necesario para interactuar con la API
}
