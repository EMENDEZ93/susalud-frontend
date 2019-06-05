import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginComponent } from './home/navbar/login/login.component';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistroComponent } from './home/navbar/registro/registro.component';
import { MedicamentoComponent } from './medicamento/medicamento.component';
import { CrearMedicamentosComponent } from './medicamento/crear-medicamentos/crear-medicamentos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    MedicamentoComponent,
    CrearMedicamentosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
