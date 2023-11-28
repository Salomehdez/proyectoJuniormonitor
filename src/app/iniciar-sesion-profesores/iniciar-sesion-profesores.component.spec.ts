import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarSesionProfesoresComponent } from './iniciar-sesion-profesores.component';

describe('IniciarSesionProfesoresComponent', () => {
  let component: IniciarSesionProfesoresComponent;
  let fixture: ComponentFixture<IniciarSesionProfesoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IniciarSesionProfesoresComponent]
    });
    fixture = TestBed.createComponent(IniciarSesionProfesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
