import { Component, Input } from "@angular/core";

@Component({
  selector: 'pokemon',
  template: `
    <span [textContent]="pokemonData.name"></span>
    <img [src]="pokemonData.sprites.front_default">
  `
})
export class PokemonComponent {
  @Input() pokemonData;
}