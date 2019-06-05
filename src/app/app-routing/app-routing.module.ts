import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { MedicamentoComponent } from '../medicamento/medicamento.component';
import {CrearMedicamentosComponent} from '../medicamento/crear-medicamentos/crear-medicamentos.component'
import { LoginComponent } from '../home/navbar/login/login.component';
import { RegistroComponent } from '../home/navbar/registro/registro.component';

const routes: Routes = [  
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'medicamentos',
    component: MedicamentoComponent
  },
  {
    path: 'crear-medicamento',
    component: CrearMedicamentosComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
