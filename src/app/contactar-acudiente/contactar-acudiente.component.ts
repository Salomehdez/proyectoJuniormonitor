// contactar-acudiente.component.ts
import { Component } from '@angular/core';
import { CorreoService } from './correo.service';

@Component({
  selector: 'app-contactar-acudiente',
  templateUrl: './contactar-acudiente.component.html',
  styleUrls: ['./contactar-acudiente.component.css'],
})
export class ContactarAcudienteComponent {
  remitente: string = '';
  destinatario: string = '';
  correoRemitente: string = '';
  correoDestinatario: string = '';
  asunto: string = '';
  mensaje: string = '';

limpiarNumero(numero: string): string {
    // Elimina espacios en blanco y caracteres no numéricos
    return 'https://wa.me/' + numero.replace(/\D/g, '');
  }

  constructor(private correoService: CorreoService) {}

  enviarMensaje(): void {
    this.correoService.setCorreoRemitente(this.correoRemitente);
    this.correoService.setCorreoDestinatario(this.correoDestinatario);
    this.correoService.setAsunto(this.asunto);
    this.correoService.setMensaje(this.mensaje);

    // Simula el envío de correo (puedes llamar al servicio real aquí)
    this.correoService.enviarCorreo();
  }

  cancelar(): void {
    // Lógica para cancelar (puedes agregar la lógica necesaria aquí)
    console.log('Mensaje cancelado');
  }
}
