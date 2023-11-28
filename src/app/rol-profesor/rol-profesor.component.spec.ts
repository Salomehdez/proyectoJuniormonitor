import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolProfesorComponent } from './rol-profesor.component';

describe('RolProfesorComponent', () => {
  let component: RolProfesorComponent;
  let fixture: ComponentFixture<RolProfesorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RolProfesorComponent]
    });
    fixture = TestBed.createComponent(RolProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
