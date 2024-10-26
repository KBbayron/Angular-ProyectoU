import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from '../../servicio/crud.service';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrl: './editar-empleado.component.css'
})
export class EditarEmpleadoComponent implements OnInit {
  elID:any;
  constructor(
    private activeRoute:ActivatedRoute, 
    private crudService:CrudService){
      this.elID = this.activeRoute.snapshot.paramMap.get('elID');
      this.crudService.ObtenerEmpleado(this.elID).subscribe(respuesta => {
        console.log(respuesta);
      });
  }
  ngOnInit(): void {
    // this.elID = this.route.snapshot.paramMap.get('id');
  }
}
