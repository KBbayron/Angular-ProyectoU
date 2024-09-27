import { Component } from '@angular/core';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrl: './agregar-empleado.component.css'
})
export class AgregarEmpleadoComponent {
  // cualquier tipo de dato
  enviarDatos (): any{
    console.log('se preciono el boton')
  }
}
