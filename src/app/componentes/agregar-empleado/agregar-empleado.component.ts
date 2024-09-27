import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrl: './agregar-empleado.component.css'
})
export class AgregarEmpleadoComponent {
  formularioDeEmpleados: FormGroup;
  constructor (public formulario: FormBuilder){
    this.formularioDeEmpleados = this.formulario.group({
      nombre: [''],
      correo: ['']
    })
  }
  // cualquier tipo de dato
  enviarDatos (): any{
    console.log('se preciono el boton');
    console.log(this.formularioDeEmpleados.value);
  }
}
