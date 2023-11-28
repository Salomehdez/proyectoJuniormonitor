// actividades-tareas-padres.component.ts
import { Component, OnInit } from '@angular/core';
import { NotificacionesPadresService } from './notificaciones-padres.service';

@Component({
  selector: 'app-actividades-tareas-padres',
  templateUrl: './actividades-tareas-padres.component.html',
  styleUrls: ['./actividades-tareas-padres.component.css'],
})
export class ActividadesTareasPadresComponent implements OnInit {
  notificaciones: any[] = [];

  constructor(private notificacionesPadresService: NotificacionesPadresService) {}

  ngOnInit(): void {
    this.notificacionesPadresService.getNotificacionesPadres().subscribe((data) => {
      this.notificaciones = data.map((notificacion) => ({
        id: notificacion.id,
        mensaje: notificacion.mensaje,
        descripcion_tarea: notificacion.descripcion_tarea,
        descripcion_actividad: notificacion.descripcion_actividad,
        nombre_grupo: notificacion.nombre_grupo,
        tipo: notificacion.descripcion_tarea ? 'Tarea' : 'Actividad',
      }));
    });
  }

  marcarRealizado(notificacion: any, index: number): void {
    // Puedes llamar a tu servicio para actualizar el estado de la notificación aquí
    console.log('Notificación marcada como realizada:', notificacion);

    // Lógica para eliminar la notificación de la lista
    this.notificaciones.splice(index, 1);

    // Muestra la alerta
    alert('Tu tarea se marcó como realizada y se quitó de la lista de notificaciones');
  }
}
