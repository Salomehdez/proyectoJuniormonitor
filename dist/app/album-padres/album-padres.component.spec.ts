import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumPadresComponent } from './album-padres.component';

describe('AlbumPadresComponent', () => {
  let component: AlbumPadresComponent;
  let fixture: ComponentFixture<AlbumPadresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumPadresComponent]
    });
    fixture = TestBed.createComponent(AlbumPadresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
