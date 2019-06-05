import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearMedicamentosComponent } from './crear-medicamentos.component';

describe('CrearMedicamentosComponent', () => {
  let component: CrearMedicamentosComponent;
  let fixture: ComponentFixture<CrearMedicamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearMedicamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearMedicamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
