import { Injectable } from '@angular/core';
import {Medicamento} from './medicamento';
import { Observable, of, from} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
    providedIn: 'root'
  })

  export class MedicamentoService {

    private urlEndPoint:string ='http://localhost:8000/api/meds'

    private httHeaders = new HttpHeaders({'Content-type': 'application/json'})
    constructor(private http:HttpClient) { }

    getMedicamento():Observable<Medicamento[]>{
        
        return this.http.get<Medicamento[]>(this.urlEndPoint);
      }

  }