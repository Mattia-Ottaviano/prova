import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPokemonComponent } from './info-pokemon.component';

describe('InfoPokemonComponent', () => {
  let component: InfoPokemonComponent;
  let fixture: ComponentFixture<InfoPokemonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoPokemonComponent]
    });
    fixture = TestBed.createComponent(InfoPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
