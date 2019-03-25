import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegistroDto } from '../dto/registro-dto';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private signupUrl = 'http://localhost:2223/api/registro';

  constructor(private http: HttpClient) { }

  registrarUsuario(registro: RegistroDto): Observable<string> {
    return this.http.post<string>(this.signupUrl, registro, httpOptions);
 
  }

}
