// notificaciones.component.ts
import { Component, OnInit } from '@angular/core';
import { NotificacionesService } from './notificaciones.service';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css'],
})
export class NotificacionesComponent implements OnInit {
  notificacion: any = {};
  tareas: any[] = [];
  actividades: any[] = [];
  grupos: any[] = [];

  constructor(private notificacionesService: NotificacionesService) {}

  ngOnInit() {
    this.cargarTareas();
    this.cargarActividades();
    this.cargarGrupos();
  }

  cargarTareas() {
    this.notificacionesService.obtenerTareas().subscribe(
      (data) => {
        this.tareas = data;
      },
      (error) => {
        console.error('Error al obtener las tareas:', error);
      }
    );
  }

  cargarActividades() {
    this.notificacionesService.obtenerActividades().subscribe(
      (data) => {
        this.actividades = data;
      },
      (error) => {
        console.error('Error al obtener las actividades:', error);
      }
    );
  }

  cargarGrupos() {
    this.notificacionesService.obtenerGrupos().subscribe(
      (data) => {
        this.grupos = data;
      },
      (error) => {
        console.error('Error al obtener los grupos:', error);
      }
    );
  }

  registrarNotificacion() {
    this.notificacionesService.registrarNotificacion(this.notificacion).subscribe(
      (response: any) => {
        console.log('Notificación registrada correctamente:', response);
        alert('Notificación registrada correctamente');
      },
      (error: any) => {
        console.error('Error al registrar la notificación:', error);
        alert('Error al registrar la notificación. Por favor, inténtalo de nuevo.');
      }
    );
  }

  cancelarRegistro() {
    alert('Registro de notificación cancelado');
  }
}
