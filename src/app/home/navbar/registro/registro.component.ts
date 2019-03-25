import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/seguridad/token/token-storage.service';
import { RegistroDto } from './dto/registro-dto';
import { RegistroService } from './servicio/registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  registroDto: RegistroDto;

  isSignedUp = false;
  isSignUpFailed = false;

  constructor(private registroService: RegistroService, private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    if(this.tokenStorageService.obtenerToken()){
      this.isLoggedIn = true;
      this.roles = this.tokenStorageService.getAuthorities();
    }
  }

  onSubmit(){
    console.log(this.form);

    this.registroDto = new RegistroDto(
      this.form.name,
      this.form.username,
      this.form.email,
      this.form.password);

    this.registroService.registrarUsuario(this.registroDto, this.tokenStorageService.obtenerToken()).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },
      error => {
        console.log(error);
        //this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}
