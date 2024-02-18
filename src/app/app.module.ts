import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ClientesComponent } from './components/c-clientes/clientes/clientes.component';
import { ClienteComponent } from './components/c-clientes/cliente/cliente.component';
import { AddClientComponent } from './components/c-clientes/add-client/add-client.component';
import { DelClientComponent } from './components/c-clientes/del-client/del-client.component';
import { ArticulosComponent } from './components/c-articulos/articulos/articulos.component';
import { ArticuloComponent } from './components/c-articulos/articulo/articulo.component';
import { AddArticuloComponent } from './components/c-articulos/add-articulo/add-articulo.component';
import { DelArticuloComponent } from './components/c-articulos/del-articulo/del-articulo.component';
import { EditArticuloComponent } from './components/c-articulos/edit-articulo/edit-articulo.component';
import { MatriculaComponent } from './components/c-matricula/matricula/matricula.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    ClientesComponent,
    ClienteComponent,
    AddClientComponent,
    DelClientComponent,
    ArticulosComponent,
    ArticuloComponent,
    AddArticuloComponent,
    DelArticuloComponent,
    EditArticuloComponent,
    MatriculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
