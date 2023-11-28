import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesTareasPadresComponent } from './actividades-tareas-padres.component';

describe('ActividadesTareasPadresComponent', () => {
  let component: ActividadesTareasPadresComponent;
  let fixture: ComponentFixture<ActividadesTareasPadresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActividadesTareasPadresComponent]
    });
    fixture = TestBed.createComponent(ActividadesTareasPadresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
