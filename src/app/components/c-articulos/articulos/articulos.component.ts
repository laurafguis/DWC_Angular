import { Component, Input } from '@angular/core';
import { Articulo } from 'src/app/models/articulo/articulo';
import { ArticuloService } from 'src/app/services/articulo/articulo.service';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css'],
})
export class ArticulosComponent {
 
  articulos!: Articulo[];

  terminoBusqueda: string = ''; // Para almacenar el término de búsqueda del usuario
  articulosFiltrados: Articulo[] = []; // Para almacenar los resultados de la búsqueda

  constructor(private articuloService: ArticuloService) {}


  ngOnInit() {
    this.articulos = this.articuloService.getArticulos();
    this.articulosFiltrados = this.articulos; // Inicialmente todos los artículos son mostrados
  }
 
  articuloSeleccionado!: Articulo | null;

  id!: string;
  nombre!: string;
  descripcion!: string;
  precio!: number;

  articuloDetalle!: Articulo | null;


  verDetalle(id: string) {
    this.articuloDetalle = this.articuloService.getArticulo(id);
    this.id = this.articuloDetalle.id;
    this.nombre = this.articuloDetalle.nombre;
    this.descripcion = this.articuloDetalle.descripcion;
    this.precio = this.articuloDetalle.precio;
  }

  buscar(terminoBusqueda: string){
    if (this.terminoBusqueda) {
      // Filtrar los artículos basándose en el término de búsqueda
      this.articulosFiltrados = this.articulos.filter(a =>
        a.nombre.toLowerCase().includes(this.terminoBusqueda.toLowerCase())
      );
    } else {
      // Si no hay término de búsqueda, no se filtra y se muestran todos
      this.articulosFiltrados = this.articulos;
    }
  }



  borrar(id: string) {
    this.articuloService.deleteArticulo(id);
  }


}
