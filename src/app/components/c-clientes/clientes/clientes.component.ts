import { Component } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { ServicioHttpService } from 'src/app/services/http-cliente/servicio-http.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  clientes!: Cliente[];
  cliente!:Cliente;

  constructor(private miServiceHttp: ServicioHttpService) { }

  ngOnInit() {
    this.miServiceHttp.getClientes().subscribe(data => {
      this.clientes = data;
    });
  }

}