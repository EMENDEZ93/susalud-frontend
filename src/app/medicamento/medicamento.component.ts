import { Component, OnInit } from '@angular/core';
import { Medicamento } from './medicamento';
import { MedicamentoService } from './medicamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicamento',
  templateUrl: './medicamento.component.html',
  styleUrls: ['./medicamento.component.css']
})
export class MedicamentoComponent implements OnInit {

 
  medicamentos: Medicamento [];
  medicamento:Medicamento = new Medicamento()

  constructor(private medicamentoService : MedicamentoService,
    private router :Router) { }

  ngOnInit() {
    this.medicamentoService.getMedicamento().subscribe(
      medicamentos => this.medicamentos = medicamentos
    );
  }

}
