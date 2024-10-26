import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Empleado } from './empleado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  API:string = 'http://localhost:8080/empleados/'; 

  constructor(private clienteHttp:HttpClient) { }
  agregarEmpleado(datosEmpleado:Empleado):Observable<any> {
    return this.clienteHttp.post(this.API+"?insertar=1",datosEmpleado); 
  }

  obtenerEmpleados(){
    return this.clienteHttp.get(this.API); 
  }

  BorrarEmpleado(id:any):Observable<any> {
    return this.clienteHttp.get(this.API+"?borrar="+id); 
  }

  ObtenerEmpleado(id:any):Observable<any> {
    return this.clienteHttp.get(this.API+"?consultar="+id);
  }
}

