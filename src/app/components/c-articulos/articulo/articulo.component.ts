import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Articulo } from 'src/app/models/articulo/articulo';
import { ArticuloService } from 'src/app/services/articulo/articulo.service';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css'],
})
export class ArticuloComponent {

  articulo!: Articulo;
  articuloId!: string; 

  constructor(
    private articuloService: ArticuloService,
    private activeRoute: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit() {
    this.cargarArticulo();
  }

  cargarArticulo () {
    this.articuloId = this.activeRoute.snapshot.params['id'];
    this.articulo = this.articuloService.getArticulo(this.articuloId);
  }

  borrar(id:string) {
    if (confirm('¿Estás seguro de que quieres borrar este artículo?')) {
      this.articuloService.deleteArticulo(id);
        this.route.navigate(['/articulos']);
      
    }
  }
  cancelar() {
  // Aquí puedes definir qué debe suceder cuando se cancela la acción.
    // Por ejemplo, podrías volver a la lista de artículos:
    this.route.navigate(['/articulos']);
  }
}
