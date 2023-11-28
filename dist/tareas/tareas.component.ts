// tareas.component.ts
import { Component } from '@angular/core';
import { TareasService } from './tareas.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'],
})
export class TareasComponent {
  tarea: any = {}; // Define la estructura de tu objeto de tarea

  constructor(private tareasService: TareasService) {}

  registrarTarea() {
    this.tareasService.registrarTarea(this.tarea).subscribe(
      (response: any) => {
        console.log('Tarea registrada correctamente:', response);
        alert('Tarea registrada correctamente');
        // Puedes realizar más acciones después de un registro exitoso si es necesario
      },
      (error: any) => {
        console.error('Error al registrar la tarea:', error);
        alert('Error al registrar la tarea. Por favor, inténtalo de nuevo.');
        // Puedes manejar el error de manera más específica según tus necesidades
      }
    );
  }

  cancelarRegistro() {
    // Aquí puedes agregar lógica para limpiar el formulario o realizar otras acciones de cancelación
    alert('Registro de tarea cancelado');
  }
}
