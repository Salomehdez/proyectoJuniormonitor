import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactarAcudienteComponent } from './contactar-acudiente.component';

describe('ContactarAcudienteComponent', () => {
  let component: ContactarAcudienteComponent;
  let fixture: ComponentFixture<ContactarAcudienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactarAcudienteComponent]
    });
    fixture = TestBed.createComponent(ContactarAcudienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
