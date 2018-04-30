import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'pokemon',
  template: `
    <span [textContent]="pokemonData.name"></span>
    <img [src]="pokemonData.sprites.front_default">
    <button (click)="removePokemon()">delete</button>
  `
})
export class PokemonComponent {
  @Input() pokemonData;
  @Output() removePokemonEvent = new EventEmitter<void>();

  removePokemon() {
    this.removePokemonEvent.emit();
  }
}