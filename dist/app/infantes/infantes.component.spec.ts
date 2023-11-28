import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfantesComponent } from './infantes.component';

describe('InfantesComponent', () => {
  let component: InfantesComponent;
  let fixture: ComponentFixture<InfantesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfantesComponent]
    });
    fixture = TestBed.createComponent(InfantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
