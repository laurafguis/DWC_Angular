import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from 'src/app/models/articulo/articulo';
import { ArticuloService } from 'src/app/services/articulo/articulo.service';

@Component({
  selector: 'app-add-articulo',
  templateUrl: './add-articulo.component.html',
  styleUrls: ['./add-articulo.component.css'],
})
export class AddArticuloComponent {
  constructor(
    private route: Router,
    private articuloService: ArticuloService
  ) {}

  articulo!: Articulo | null;
  id!: string;
  nombre!: string;
  descripcion!: string;
  precio!: number;

  insertar() {
    let nuevoArticulo: Articulo = {
      id: this.id,
      nombre: this.nombre,
      descripcion: this.descripcion,
      precio: this.precio,
    };

    console.log(
      'Grabamos: ' +
        nuevoArticulo.id +
        '\n' +
        nuevoArticulo.nombre +
        '\n' +
        nuevoArticulo.descripcion +
        '\n' +
        nuevoArticulo.precio
    );

    this.articuloService.addArticulo(nuevoArticulo);
    alert('Artículo añadido');
    this.limpiarFormulario();
    this.route.navigate(['/articulos']);
  }

  limpiarFormulario() {
    this.id = '';
    this.nombre = '';
    this.descripcion = '';
    this.precio = 0;
  }

  cancelar() {
    this.articulo = null;
    // Navega a la ruta de los artículos
    this.route.navigate(['/articulos']);
  }
}
