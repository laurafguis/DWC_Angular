import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() buscarEvento = new EventEmitter<string>();

  terminoBusqueda: string = '';

  buscar() {
    this.buscarEvento.emit(this.terminoBusqueda);
  }

}
