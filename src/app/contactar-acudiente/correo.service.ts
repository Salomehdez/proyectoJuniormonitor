import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CorreoService {
  private correoRemitente: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private correoDestinatario: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private asunto: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private mensaje: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {}

  setCorreoRemitente(correo: string): void {
    this.correoRemitente.next(correo);
  }

  getCorreoRemitente(): BehaviorSubject<string> {
    return this.correoRemitente;
  }

  setCorreoDestinatario(correo: string): void {
    this.correoDestinatario.next(correo);
  }

  getCorreoDestinatario(): BehaviorSubject<string> {
    return this.correoDestinatario;
  }

  setAsunto(asunto: string): void {
    this.asunto.next(asunto);
  }

  getAsunto(): BehaviorSubject<string> {
    return this.asunto;
  }

  setMensaje(mensaje: string): void {
    this.mensaje.next(mensaje);
  }

  getMensaje(): BehaviorSubject<string> {
    return this.mensaje;
  }

  enviarCorreo(): void {
    const datosCorreo = {
      remitente: this.correoRemitente.value,
      destinatario: this.correoDestinatario.value,
      asunto: this.asunto.value,
      mensaje: this.mensaje.value,
    };

    // Llamada HTTP al servidor Django para enviar el correo
    this.http.post('http://localhost:8000/enviar-correo/', datosCorreo).subscribe(
      (respuesta) => {
        console.log('Correo enviado:', respuesta);
      },
      (error) => {
        if (error.status === 400 && error.error.error === 'Usuario no autenticado') {
          // Manejar la situación de usuario no autenticado aquí
          // Por ejemplo, redirigir a la página de inicio de sesión
          console.error('Usuario no autenticado');
        } else {
          console.error('Error al enviar el correo:', error);
        }
      }
    );
  }
}
