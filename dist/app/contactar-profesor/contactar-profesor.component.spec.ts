import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactarProfesorComponent } from './contactar-profesor.component';

describe('ContactarProfesorComponent', () => {
  let component: ContactarProfesorComponent;
  let fixture: ComponentFixture<ContactarProfesorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactarProfesorComponent]
    });
    fixture = TestBed.createComponent(ContactarProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
