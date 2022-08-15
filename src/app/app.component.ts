import { Component } from '@angular/core';
import { Empleado } from './models/empleado';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  employeeArray: Empleado[] = [
    {cedula: 1, nombre: "Lorenzo", apellido: "Franco", fecha_naci: "8/15/2022", celular: '8297421419', correo: "lorenzohugo56@gmail.com"},
    {cedula: 2, nombre: "Miguel", apellido: "Nunez", fecha_naci: "8/15/2022", celular: '809275892', correo: "miguelfesgsg@gmail.com"},
    {cedula: 3, nombre: "Alex", apellido: "Hernandez", fecha_naci: "8/15/2022", celular: '847332767474', correo: "gjgfjfttrh@gmail.com"}
  ];

}
