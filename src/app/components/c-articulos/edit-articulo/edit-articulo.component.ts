import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articulo } from 'src/app/models/articulo/articulo';
import { ArticuloService } from 'src/app/services/articulo/articulo.service';

@Component({
  selector: 'app-edit-articulo',
  templateUrl: './edit-articulo.component.html',
  styleUrls: ['./edit-articulo.component.css'],
})
export class EditArticuloComponent {

  articulo!: Articulo;
  articuloSeleccionado!:Articulo | null

  id !:string
  nombre!:string
  descripcion !:string
  precio !:number
  
  constructor(
    private activeRoute: ActivatedRoute,
    private route: Router,
    private articuloService: ArticuloService
  ) {}

  ngOnInit() {
    this.cargarArticulo();
  }

  cargarArticulo () {
    this.id = this.activeRoute.snapshot.params['id'];
    this.articulo = this.articuloService.getArticulo(this.id);
  }


  modificar() {
    if (this.articuloSeleccionado != null) {
      let articuloModificado: Articulo = {
        id: this.id,
        nombre: this.nombre,
        descripcion: this.descripcion,
        precio: this.precio,
      };
      this.articuloService.putArticulo(articuloModificado);
    }
    this.articuloSeleccionado = null;
  }

  cancelar() {
    this.articuloSeleccionado = null;
    // Navega a la ruta de los artículos
    this.route.navigate(['/articulos']);
  }
}
