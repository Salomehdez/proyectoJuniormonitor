import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-jardin',
  templateUrl: './registrar-jardin.component.html',
  styleUrls: ['./registrar-jardin.component.css']
})
export class RegistrarJardinComponent {
  datosJardin = { nombre: '', email: '', contacto: '', detalles_ubicacion: '' };

  constructor(private http: HttpClient, private router: Router) {}

  registrarJardin() {
    if (
      this.datosJardin.nombre &&
      this.datosJardin.email &&
      this.datosJardin.contacto &&
      this.datosJardin.detalles_ubicacion
    ) {
      this.http.post('http://localhost:8000/api/jardines/', this.datosJardin)
        .subscribe(
          (response: any) => {
            console.log('Jardín registrado exitosamente', response);

            const jardinID = response.id; // Dependiendo de la respuesta de tu API

            // Redireccionar a la página de detalles del jardín
          },
          (error: any) => {
            console.error('Error al registrar el jardín', error);
            // Manejo de errores, tal vez mostrar un mensaje al usuario
          }
        );
    } else {
      console.error('Por favor, completa todos los campos.');
      // Aquí podrías mostrar un mensaje al usuario indicando que los campos son obligatorios
    }
  }

  cancelarRegistro() {
    // Lógica para cancelar el registro, por ejemplo, redireccionar a otra página
    console.log('Registro cancelado');
    // No agregues aquí la lógica de redirección si no deseas que se ejecute al cancelar
  }
}
