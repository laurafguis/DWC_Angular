import { Component } from '@angular/core';
import { Modulo } from 'src/app/models/matricula/modulo';
import { MatriculaService } from 'src/app/services/matricula/matricula.service';

@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
  styleUrls: ['./matricula.component.css']
})
export class MatriculaComponent {

  profesorSeleccionado: string = 'todos';
  modulosFiltrados: any;
  modulos: Modulo[] = [];


  constructor(private matriculaService: MatriculaService) { }


  ngOnInit() {
     this.modulos = this.matriculaService.getModulos();
     this.modulosFiltrados = this.modulos; // Inicialmente todos los módulos son mostrados

  }


  filtrar(profesor: string) {
    this.modulosFiltrados = this.matriculaService.filtrarPorProfesor(profesor);
    console.log(profesor);
  }

  
}
