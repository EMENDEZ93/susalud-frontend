import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegistroDto } from '../dto/registro-dto';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'src/app/seguridad/token/token-storage.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private signupUrl = 'http://localhost:2223/api/registro';

  constructor(private http: HttpClient) { }

  registrarUsuario(registro: RegistroDto, token): Observable<string> {

    const httpOptions2 = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token })
    };

    return this.http.post<string>(this.signupUrl, registro, httpOptions2);
  }

}
