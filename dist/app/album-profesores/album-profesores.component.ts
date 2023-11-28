// src/app/album-profesores/album-profesores.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-album-profesores',
  templateUrl: './album-profesores.component.html',
  styleUrls: ['./album-profesores.component.css'],
})
export class AlbumProfesoresComponent {
  album: any = {}; // Asegúrate de tener una definición de 'album' aquí

  enviarFotos(): void {
    // Lógica para enviar fotos
    alert('Fotos enviadas');
  }

  onFileSelected(event: any): void {
    // Lógica para manejar la selección de archivos
    alert('Archivo seleccionado');
  }

  cancelar(): void {
    // Lógica para cancelar
    alert('Operación cancelada');
  }
}
