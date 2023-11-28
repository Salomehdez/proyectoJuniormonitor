import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegistroJardinService {
  private apiUrl = 'http://localhost:8000/api/jardines/'; // Asegúrate de apuntar a la URL correcta de tu backend

  constructor(private http: HttpClient) {}

  registrarJardin(datosJardin: any): Observable<any> {
    return this.http.post(this.apiUrl, datosJardin);
  }
}
