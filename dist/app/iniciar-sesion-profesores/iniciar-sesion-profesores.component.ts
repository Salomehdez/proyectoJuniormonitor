// iniciar-sesion-profesores.component.ts

import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-iniciar-sesion-profesores',
  templateUrl: './iniciar-sesion-profesores.component.html',
  styleUrls: ['./iniciar-sesion-profesores.component.css'],
})
export class IniciarSesionProfesoresComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  iniciarSesion(): void {
    this.authService.login(this.username, this.password).subscribe(
      (data: any) => {
        console.log('Inicio de sesión exitoso', data);
        // Puedes agregar redirección u otras acciones después del inicio de sesión exitoso
      },
      (error: HttpErrorResponse) => {
        console.error('Error al iniciar sesión:', error);
        // Puedes manejar el error de inicio de sesión aquí
      }
    );
  }
}
