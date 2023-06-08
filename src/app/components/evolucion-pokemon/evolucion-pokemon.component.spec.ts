import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolucionPokemonComponent } from './evolucion-pokemon.component';

describe('EvolucionPokemonComponent', () => {
  let component: EvolucionPokemonComponent;
  let fixture: ComponentFixture<EvolucionPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvolucionPokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolucionPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
