import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Empleado } from './empleado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private readonly API = 'http://localhost/empleados'; // Definimos la API como una constante de solo lectura

  constructor(private clienteHttp: HttpClient) { }

  agregarEmpleado(datosEmpleado: Empleado): Observable<any> {
    const url = `${this.API}?insertar=1`; // Usamos Template Literals para mejorar la legibilidad
    return this.clienteHttp.post(url, datosEmpleado); // Mantenemos el uso del post con la URL y los datos
  }
}

