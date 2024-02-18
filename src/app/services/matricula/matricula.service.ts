import { Injectable } from '@angular/core';
import { MODULOS } from 'src/app/models/matricula/mock-modulos';
import { Modulo } from 'src/app/models/matricula/modulo';

@Injectable({
  providedIn: 'root',
})
export class MatriculaService {

   password: string = '1234';
   
   modulosFiltrados: Modulo[] = [];
   modulos: Modulo[] = MODULOS;

  getModulos() {
    return this.modulos;
  }

  getModulo(codigo: number) {
    return this.modulos.find((m) => m.codigo === codigo);
  }

  addModulo(modulo: Modulo) {
    this.modulos.push(modulo);
  }

  putModulo(modulo: Modulo) {
    const index = this.modulos.findIndex((m) => m.codigo === modulo.codigo);
    if (index !== -1) {
      this.modulos[index] = modulo;
    }
  }

  deleteModulo(codigo: number) {
    const index = this.modulos.findIndex((m) => m.codigo === codigo);
    if (index !== -1) {
      this.modulos.splice(index, 1);
    }
  }

  filtrarPorProfesor(profesor: string) {
    if (profesor === 'todos') {
      this.modulosFiltrados = this.modulos;
    } else {
      this.modulosFiltrados = this.modulos.filter(m => m.profesor === profesor);
    }
  }
}




