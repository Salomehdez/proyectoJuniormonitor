// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PreciosComponent } from './precios/precios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistrarJardinComponent } from './registrar-jardin/registrar-jardin.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './iniciar-sesion/auth.service';
import { RolPadresComponent } from './rol-padres/rol-padres.component';
import { RolProfesorComponent } from './rol-profesor/rol-profesor.component';
import { ContactarProfesorComponent } from './contactar-profesor/contactar-profesor.component';
import { ContactarAcudienteComponent } from './contactar-acudiente/contactar-acudiente.component';
import { CorreoService } from './contactar-acudiente/correo.service';
import { TareasComponent } from './tareas/tareas.component';
import { ActividadesComponent } from './actividades/actividades.component';
import { IniciarSesionProfesoresComponent } from './iniciar-sesion-profesores/iniciar-sesion-profesores.component';
import { AlbumProfesoresComponent } from './album-profesores/album-profesores.component';
import { AlbumPadresComponent } from './album-padres/album-padres.component';
import { RecordatoriosPagosPadresComponent } from './recordatorios-pagos-padres/recordatorios-pagos-padres.component';
import { ActividadesTareasPadresComponent } from './actividades-tareas-padres/actividades-tareas-padres.component';
import { InfantesComponent } from './infantes/infantes.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';




@NgModule({
  declarations: [
    AppComponent,
    PreciosComponent,
    ContactoComponent,
    InicioComponent,
    RegistrarJardinComponent,
    IniciarSesionComponent,
    RolPadresComponent,
    RolProfesorComponent,
    ContactarProfesorComponent,
    ContactarAcudienteComponent,
    TareasComponent,
    ActividadesComponent,
    IniciarSesionProfesoresComponent,
    ActividadesTareasPadresComponent,
    AlbumProfesoresComponent,
    AlbumPadresComponent,
    RecordatoriosPagosPadresComponent,
    InfantesComponent,
    NotificacionesComponent,
   
   
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [AuthService, CorreoService], // Agrega tu servicio CorreoService a los providers
  bootstrap: [AppComponent],
})
export class AppModule {}
