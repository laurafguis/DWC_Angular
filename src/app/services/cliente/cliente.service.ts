import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  constructor(private miServicio: ClienteService, private miHttp: HttpClient) {}

  clientes: Array<Cliente> = [];

  getClientes(): Array<Cliente> {
    return this.clientes;
  }

  findByIdCliente(id: number): Cliente {
    let cliente = this.clientes.find((c) => c.id == id);
    return cliente!;
  }

  addCliente(nuevoCliente: Cliente): void {
    let IdIncrementativo = this.clientes[this.clientes.length - 1].id;
    if (IdIncrementativo != null) {
      nuevoCliente.id = IdIncrementativo + 1;
      this.clientes.push(nuevoCliente);
    }
  }

  updateCliente(actualizaCliente: Cliente) {
    let cliente = this.clientes.find((c) => c.id == actualizaCliente.id);
    cliente = actualizaCliente;
  }

  deleteCliente(id: number): void {
    let index = this.clientes.findIndex((c) => c.id == id);
    this.clientes.splice(index, 1);
  }

  addVoto(id: number) {
    let client = this.clientes.find((c) => c.id == id)!;
    client.votos++;
  }

  quitVoto(id: number) {
    let client = this.clientes.find((c) => c.id == id)!;
    if (client.votos > 0) {
      client.votos--;
    }
  }
}
