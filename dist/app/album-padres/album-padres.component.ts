// album-padres.component.ts
import { Component, OnInit } from '@angular/core';
import { AlbumPadresService } from './album-padres.service';

@Component({
  selector: 'app-album-padres',
  templateUrl: './album-padres.component.html',
  styleUrls: ['./album-padres.component.css']
})
export class AlbumPadresComponent implements OnInit {
  albums: any[] = [];

  constructor(private albumPadresService: AlbumPadresService) { }

  ngOnInit(): void {
    this.albumPadresService.getAlbums().subscribe(
      (data: any[]) => {
        this.albums = data;
      },
      (error) => {
        console.error('Error al obtener la información de los álbumes:', error);
      }
    );
  }
}
