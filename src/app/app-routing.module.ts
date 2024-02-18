import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ClienteComponent } from './components/c-clientes/cliente/cliente.component';
import { ClientesComponent } from './components/c-clientes/clientes/clientes.component';
import { ArticuloComponent } from './components/c-articulos/articulo/articulo.component';
import { ArticulosComponent } from './components/c-articulos/articulos/articulos.component';
import { AddArticuloComponent } from './components/c-articulos/add-articulo/add-articulo.component';;
import { EditArticuloComponent } from './components/c-articulos/edit-articulo/edit-articulo.component';
import { MatriculaComponent } from './components/c-matricula/matricula/matricula.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'clientes', component: ClientesComponent},
  { path: 'cliente/:id', component: ClienteComponent},
  { path: 'articulos', component: ArticulosComponent},
  { path: 'articulo/add', component: AddArticuloComponent},
  { path: 'articulo/:id', component: ArticuloComponent},
  { path: 'articulo/edit/:id', component:  EditArticuloComponent},
  { path: 'articulo/del/:id', component:  ArticuloComponent},
  { path: 'modulos', component: MatriculaComponent},
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
