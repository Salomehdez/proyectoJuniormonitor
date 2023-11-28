import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolPadresComponent } from './rol-padres.component';

describe('RolPadresComponent', () => {
  let component: RolPadresComponent;
  let fixture: ComponentFixture<RolPadresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RolPadresComponent]
    });
    fixture = TestBed.createComponent(RolPadresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
