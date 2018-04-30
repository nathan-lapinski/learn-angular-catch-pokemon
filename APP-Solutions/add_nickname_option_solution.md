# Solution to Add Nickname Optioin
There are multiple ways of solving this problem. Here is one solution that uses `@Output` properties, as well as the `index` of an `*ngFor` directive.

A simple approach that works here is to add a text input to the PokemonComponent template, and use event binding to listen for keyup.enter events on the button. Whenever such an event happens, the PokemonComponent can use an @Output property called pokemonNicknameEvent to notify its parent of the event. The parent can then take the nickname, along with the index of the pokemon component, and use that information to add a nickname property to the appropriate pokemon item in the data list (normally, we'd have a proper data model for Pokemon, and wouldn't go adding properties to objects all willy-nilly like this).
The last step will be to update the PokemonComponent's template to conditionally display the nickname if it exists, or to display the pokemon's name otherwise.

###### pokemon-component.ts

```javascript
@Component({
  selector: 'pokemon',
  template: `
    <span [textContent]="pokemonData.nickname || pokemonData.name"></span>
    <img [src]="pokemonData.sprites.front_default">
    <input type="text" placeholder="enter nickname" (keyup.enter)="addNickname($event.target.value)">
  `
})
```

This adds an input to each PokemonComponent, and registers the addNickname function as an event handler. Note that we also update the `<span>` tag to display the nickname if it exists, and to fallback to displaying the pokemon's name.

Next, let's define a special event using an `@Output` property to create an event emitter that will notify the parent component each time data is entered

##### pokemon-component.ts

```javascript
import { Component, Input, Output, EventEmitter } from "@angular/core";

export class PokemonComponent {
  @Input() pokemonData;
  @Output() pokemonNicknameEvent = new EventEmitter<string>();

  addNickname(nickname: string) {
    this.pokemonNicknameEvent.emit(nickname);
  }
}
```

How does the parent know to listen to this event? We simply register a listener in PokemonHomeComponent. But, this event is passing any data up to the parent. How will the parent know which pokemon to delete from its list?
Since this is a very simple list of pokemon, we can use the `index` property of `*ngFor` to pass the index of the cliked element to the parent's event listener, like so:

##### pokemon-home.component.html

```html
<div *ngFor="let pokemon of data; let i = index ">
    <pokemon [pokemonData]="pokemon" 
             (pokemonNicknameEvent)="addNickname($event, i)"></pokemon>
  </div>
```

##### pokemon-home.component.ts

```javascript
addNickname(nickname: string, index: number) {
    this.data[index].nickname = nickname;
  }
```
