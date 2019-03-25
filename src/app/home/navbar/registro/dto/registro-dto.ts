export class RegistroDto {

    nombre: string;
    usuario: string;
    correo: string;
    rol: string[];
    contrasena: string;

    constructor(nombre: string, usuario: string, correo: string, contrasena: string) {
        this.nombre = nombre;
        this.usuario = usuario;
        this.correo = correo;
        this.contrasena = contrasena;
        this.rol = ['admin'];
    }

}
