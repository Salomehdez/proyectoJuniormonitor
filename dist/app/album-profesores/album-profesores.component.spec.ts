import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumProfesoresComponent } from './album-profesores.component';

describe('AlbumProfesoresComponent', () => {
  let component: AlbumProfesoresComponent;
  let fixture: ComponentFixture<AlbumProfesoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumProfesoresComponent]
    });
    fixture = TestBed.createComponent(AlbumProfesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
