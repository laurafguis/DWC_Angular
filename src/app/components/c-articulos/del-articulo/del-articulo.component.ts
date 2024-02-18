import { Component } from '@angular/core';
import { ActivatedRoute, Router,  } from '@angular/router';
import { Articulo } from 'src/app/models/articulo/articulo';
import { ArticuloService } from 'src/app/services/articulo/articulo.service';

@Component({
  selector: 'app-del-articulo',
  templateUrl: './del-articulo.component.html',
  styleUrls: ['./del-articulo.component.css']
})
export class DelArticuloComponent {

  articulo!: Articulo;
  id!: string;

  constructor(
    private articuloService: ArticuloService,
    private router: Router,
    private rutaActiva: ActivatedRoute
  ) {}

  ngOnInit() {
    //let id=this.rutaActiva.snapshot.params['id']
    this.rutaActiva.params.subscribe((params) => (this.id = params['id']));
    alert('Con subscripcion');
    this.articulo = this.articuloService.getArticulo(this.id);
  }

  borrar() {
    this.articuloService.deleteArticulo(this.articulo.id);
    this.router.navigate(['/articulos']);
  }

}
