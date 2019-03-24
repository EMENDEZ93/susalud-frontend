export class LoginDto {

    usuario: string;
    constrasena: string;

    constructor(usuario: string, contrasena: string) {
        this.usuario = usuario;
        this.constrasena = contrasena;
    }

}
