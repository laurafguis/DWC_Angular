import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { ServicioHttpService } from 'src/app/services/http-cliente/servicio-http.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})
export class ClienteComponent {
  cliente!: Cliente;
  idCliente!: number;

  constructor(private miServiceHttp: ServicioHttpService) {}

  verCliente() {
    this.miServiceHttp.getCliente(this.idCliente).subscribe(dato => {
      this.cliente = dato; // Asignar el resultado a la variable cliente
      console.log(this.cliente); // Mostrar el detalle del cliente
    });
  }

  deleteCliente() {
    this.miServiceHttp.deleteCliente(this.idCliente);
  }

  addVoto() {
    this.miServiceHttp.addVoto(this.idCliente);
  }

  quitVoto() {
    this.miServiceHttp.quitVoto(this.idCliente);
  }
}


