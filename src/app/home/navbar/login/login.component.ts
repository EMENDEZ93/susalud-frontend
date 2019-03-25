import { Component, OnInit } from '@angular/core';
import { LoginDto } from './dto/login-dto';
import { SesionService } from './servicio/sesion.service';
import { TokenStorageService } from 'src/app/seguridad/token/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];  
  private loginInfo: LoginDto;

  constructor(private sesionService: SesionService, private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    if(this.tokenStorageService.obtenerToken()){
      this.isLoggedIn = true;
      this.roles = this.tokenStorageService.getAuthorities();
    }
  }

  onSubmit(){
    this.loginInfo = new LoginDto(
      this.form.usuario,
      this.form.contrasena
    );

    this.sesionService.autenticacion(this.loginInfo).subscribe(
      (data) => {
        this.tokenStorageService.guardarToken(data.accessToken);
        this.tokenStorageService.guardarUsuario(data.username);
        this.tokenStorageService.saveAuthorities(data.authorities);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorageService.getAuthorities();
        this.cargarPagina();      
      },
      (error) => {
        this.errorMessage = error.error.message;
        this.isLoginFailed = false;
      }
    )
  }


  cargarPagina() {
    window.location.reload();
  }

}
