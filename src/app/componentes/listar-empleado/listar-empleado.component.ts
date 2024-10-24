import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../servicio/crud.service';

@Component({
  selector: 'app-listar-empleado',
  templateUrl: './listar-empleado.component.html',
  styleUrl: './listar-empleado.component.css'
})
export class ListarEmpleadoComponent {
  Empleados:any;
  constructor(private crudService: CrudService) {}
  ngOnInit():void{
    this.crudService.obtenerEmpleados().subscribe(respuesta => {
      console.log(respuesta);
  });
  }
};

