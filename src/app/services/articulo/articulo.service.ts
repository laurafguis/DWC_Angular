import { Injectable } from '@angular/core';

import { Articulo } from 'src/app/models/articulo/articulo';
import { ARTICULOS } from 'src/app/models/articulo/mock-articulos';

@Injectable({
  providedIn: 'root',
})
export class ArticuloService {
  constructor() {}

  articulos: Articulo[] = ARTICULOS;

  getArticulos() {
    return this.articulos;
  }

  getArticulo(id: string) {
    let pos = this.articulos.findIndex((a) => a.id == id);
    return this.articulos[pos];
  }

  addArticulo(articulo: Articulo) {
    this.articulos.push(articulo);
  }

  putArticulo(articulo: Articulo) {
    let pos = this.articulos.findIndex((a) => a.id == articulo.id);
    this.articulos[pos] = articulo;
  }

  deleteArticulo(id: string): void {
    const index = this.articulos.findIndex(articulo => articulo.id === id);
    if (index !== -1) {
      this.articulos.splice(index, 1);
    }
  }
  deleteArticulo0(id: string) {
    this.articulos = this.articulos.filter((a) => a.id != id);
  }

  acceder() {
    let fecha: Date = new Date();
    let hora = fecha.getHours();
    if (hora >= 8) {
      return true;
    } else {
      return false;
    }
  }

  filtrarArticulos(precio: number, orden: string) {
    let articulosFiltrados = this.articulos.filter((a) => a.precio >= precio);
    articulosFiltrados.sort((a, b) => a.precio - b.precio);
    if (orden == 'asc') {
      return articulosFiltrados;
    } else {
      return articulosFiltrados.reverse();
    }
  }
}
