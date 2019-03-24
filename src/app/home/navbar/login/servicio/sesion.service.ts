import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginDto } from '../dto/login-dto';
import { Observable } from 'rxjs';
import { JwtResponse } from 'src/app/seguridad/token/message/jwt-response';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  private sesionUrl = 'http://localhost:2223/api/sesion';
  
  constructor(private http: HttpClient) { }

  autenticacion(loginDto: LoginDto): Observable<JwtResponse>{
    return this.http.post<JwtResponse>(this.sesionUrl, loginDto, httpOptions);
  }

}
