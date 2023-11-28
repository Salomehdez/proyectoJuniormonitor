import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarJardinComponent } from './registrar-jardin.component';

describe('RegistrarJardinComponent', () => {
  let component: RegistrarJardinComponent;
  let fixture: ComponentFixture<RegistrarJardinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarJardinComponent]
    });
    fixture = TestBed.createComponent(RegistrarJardinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
