import { Component, OnInit } from '@angular/core';
import { Medicamento} from '../medicamento';
import { MedicamentoService } from '../medicamento.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-medicamentos',
  templateUrl: './crear-medicamentos.component.html',
  styleUrls: ['./crear-medicamentos.component.css']
})
export class CrearMedicamentosComponent implements OnInit {

  private medicamento:Medicamento = new Medicamento();

  constructor(private medicamentoService: MedicamentoService, 
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }
  public create(): void{
    this.medicamentoService.create(this.medicamento)
    .subscribe( medicamento => {
        this.router.navigate(['/medicamentos'])
        Swal.fire('Nuevo medicamento Registrado', `Medicamento creado con éxito`, 'success')
      }
    );
  }
}
