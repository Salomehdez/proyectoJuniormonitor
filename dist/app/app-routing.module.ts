import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { PreciosComponent } from './precios/precios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RegistrarJardinComponent } from './registrar-jardin/registrar-jardin.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { RolPadresComponent } from './rol-padres/rol-padres.component';
import { RolProfesorComponent } from './rol-profesor/rol-profesor.component';
import { ContactarProfesorComponent } from './contactar-profesor/contactar-profesor.component';
import { ContactarAcudienteComponent } from './contactar-acudiente/contactar-acudiente.component';
import { TareasComponent } from './tareas/tareas.component'; // Asegúrate de ajustar el nombre del componente
import { ActividadesComponent } from './actividades/actividades.component'; // Asegúrate de ajustar el nombre del componente
import { IniciarSesionProfesoresComponent } from './iniciar-sesion-profesores/iniciar-sesion-profesores.component';
import { ActividadesTareasPadresComponent } from './actividades-tareas-padres/actividades-tareas-padres.component';
import { AlbumPadresComponent } from './album-padres/album-padres.component';
import { AlbumProfesoresComponent } from './album-profesores/album-profesores.component';
import { RecordatoriosPagosPadresComponent } from './recordatorios-pagos-padres/recordatorios-pagos-padres.component';
import { InfantesComponent } from './infantes/infantes.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'precios', component: PreciosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'registrar-jardin', component: RegistrarJardinComponent },
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  { path: 'rol-padres', component: RolPadresComponent },
  { path: 'rol-profesor', component: RolProfesorComponent },
  { path: 'contactar-profesor', component: ContactarProfesorComponent },
  { path: 'contactar-acudiente', component: ContactarAcudienteComponent },
  { path: 'tareas', component: TareasComponent }, // Agrega esta línea
  { path: 'actividades', component: ActividadesComponent }, // Agrega esta línea
  { path: 'iniciar-sesion-profesores', component: IniciarSesionProfesoresComponent },
  { path: 'actividades-tareas-padres', component: ActividadesTareasPadresComponent },
  { path: 'album-padres', component: AlbumPadresComponent },
  { path: 'album-profesores', component: AlbumProfesoresComponent },
  { path: 'recordatorios-pagos-padres', component: RecordatoriosPagosPadresComponent },
  { path: 'infantes', component: InfantesComponent },
  { path: 'notificaciones', component: NotificacionesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
