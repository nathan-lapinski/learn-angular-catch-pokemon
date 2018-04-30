import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'pokemon',
  template: `
    <span [textContent]="pokemonData.nickname || pokemonData.name"></span>
    <img [src]="pokemonData.sprites.front_default">
    <button (click)="removePokemon()">delete</button>
    <input type="text" placeholder="enter nickname" (keyup.enter)="addNickname($event.target.value)">
  `
})
export class PokemonComponent {
  @Input() pokemonData;
  @Output() removePokemonEvent = new EventEmitter<void>();
  @Output() pokemonNicknameEvent = new EventEmitter<string>();

  removePokemon() {
    this.removePokemonEvent.emit();
  }

  addNickname(nickname: string) {
    this.pokemonNicknameEvent.emit(nickname);
  }
}