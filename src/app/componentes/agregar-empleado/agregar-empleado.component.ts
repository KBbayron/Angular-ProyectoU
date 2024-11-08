import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from '../../servicio/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrl: './agregar-empleado.component.css'
})

export class AgregarEmpleadoComponent {
  formularioDeEmpleados: FormGroup;
  constructor (
    public formulario: FormBuilder, 
    private crudService:CrudService,
    private router: Router){
      this.formularioDeEmpleados = this.formulario.group({
        nombre: [''],
        correo: ['']
      })
  }
  enviarDatos (): any{
    console.log('se preciono el boton');
    console.log(this.formularioDeEmpleados.value);
    this.crudService.agregarEmpleado(this.formularioDeEmpleados.value).subscribe(respuesta => {
      this.router.navigateByUrl('/listar-empleado'); 
    });
  }
}
