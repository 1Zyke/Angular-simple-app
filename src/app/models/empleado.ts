export class Empleado {
   cedula: number;
   nombre: string;
   apellido: string;
   fecha_naci: string;
   celular: string;
   correo: string
   /**
    *
    */
   constructor(
    cedula: number,
    nombre: string,
    apellido: string,
    fecha_naci: string,
    celular: string,
    correo: string
   ) {
    this.cedula = cedula,
    this.nombre = nombre,
    this.apellido = apellido,
    this.fecha_naci = fecha_naci,
    this.celular = celular,
    this.correo = correo

   }
}
