import { Injectable } from '@angular/core';
import { Cliente } from '../../models/cliente';
import { Observable, retry, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioHttpService {
  constructor(private miHTTP: HttpClient) {}

  url:string = 'http://localhost:3000/clientes';

  
  private manejarError(error: HttpErrorResponse) {
    if (error.status === 0) { 
      console.error('Error de conexión:', error.error); } 
      else { 
        console.error(`Error en el backend código ${error.status}, mensaje: `, error.statusText); } 
        return throwError(() => new Error('por favor intenta de nuevo más tarde.')); 
    }

  getClientes(): Observable<Cliente[]> {
     return this.miHTTP.get<Cliente[]>(this.url)
                       .pipe(retry(3)) }

  getCliente(id:number | undefined ): Observable<Cliente> { 
    return this.miHTTP.get<Cliente>(this.url +"/"+ id); }

  putCliente(cliente:Cliente): Observable<Cliente> {  
    return this.miHTTP.put<Cliente>(this.url +"/"+ cliente.id, cliente); 
  }

  postCliente(cliente:Cliente): Observable<Cliente> {  
    return this.miHTTP.post<Cliente>(this.url, cliente); 
  }

  deleteCliente(id:number | undefined): Observable<Cliente> {  
    return this.miHTTP.delete<Cliente>(this.url +"/"+ id); 
  }

  addVoto(id:number | undefined): Observable<Cliente> {  
    return this.miHTTP.patch<Cliente>(this.url +"/"+ id, {votos:1}); 

  }

  quitVoto(id:number | undefined): Observable<Cliente> {  
    return this.miHTTP.patch<Cliente>(this.url +"/"+ id, {votos:-1}); 
  }

}