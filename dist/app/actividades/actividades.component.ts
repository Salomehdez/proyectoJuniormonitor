// actividades.component.ts
import { Component } from '@angular/core';
import { ActividadesService } from './actividades.service';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css'],
})
export class ActividadesComponent {
  actividad: any = {}; // Aquí define la estructura de tu objeto de actividad

  constructor(private actividadesService: ActividadesService) {}

  registrarActividad() {
    this.actividadesService.registrarActividad(this.actividad).subscribe(
      (response) => {
        console.log('Actividad registrada correctamente:', response);
        alert('Actividad registrada correctamente');
        // Puedes realizar más acciones después de un registro exitoso si es necesario
      },
      (error) => {
        console.error('Error al registrar la actividad:', error);
        alert('Error al registrar la actividad. Por favor, inténtalo de nuevo.');
        // Puedes manejar el error de manera más específica según tus necesidades
      }
    );
  }

  cancelarRegistro() {
    // Aquí puedes agregar lógica para limpiar el formulario o realizar otras acciones de cancelación
    alert('Registro de actividad cancelado');
  }
}
