// infantes.component.ts
import { Component, OnInit } from '@angular/core';
import { InfantesService } from './infantes.service';

@Component({
  selector: 'app-infantes',
  templateUrl: './infantes.component.html',
  styleUrls: ['./infantes.component.css']
})
export class InfantesComponent implements OnInit {
  infantes: any[] = [];

  constructor(private infantesService: InfantesService) { }

  ngOnInit(): void {
    this.infantesService.getInfantes().subscribe(data => {
      this.infantes = data;
      this.loadGrupoNames();
    });
  }

  loadGrupoNames(): void {
    this.infantes.forEach(infante => {
      this.infantesService.getGrupoById(infante.id_grupo).subscribe(grupo => {
        infante.nombreGrupo = grupo.nombre;
      });
    });
  }
}
