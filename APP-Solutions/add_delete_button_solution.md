# Solution to Add Delete Button
There are multiple ways of solving this problem. Here is one solution that uses `@Output` properties, as well as the `index` of an `*ngFor` directive.

A simple approach that works here is to add a delete button to the PokemonComponent template, and use event binding to listen for click events on the button.

###### pokemon-component.ts

```javascript
@Component({
  selector: 'pokemon',
  template: `
    <span [textContent]="pokemonData.nickname || pokemonData.name"></span>
    <img [src]="pokemonData.sprites.front_default">
    <button (click)="removePokemon()">delete</button>
  `
})
```

This adds a button to each PokemonComponent, and registers the removePokemon function as an event handler.

Next, let's define a special event using an `@Output` property to create an event emitter that will notify the parent component each time this button is clicked.

##### pokemon-component.ts

```javascript
import { Component, Input, Output, EventEmitter } from "@angular/core";

export class PokemonComponent {
  @Input() pokemonData;
  @Output() removePokemonEvent = new EventEmitter<void>();

  removePokemon() {
    this.removePokemonEvent.emit();
  }
}
```

Now, every time the delete button is clicked, the PokemonComponent will emit a removePokemonEvent to its parent. How does the parent know to listen to this event? We simply register a listener in PokemonHomeComponent. But, this event is passing any data up to the parent. How will the parent know which pokemon to delete from its list?
Since this is a very simple list of pokemon, we can use the `index` property of `*ngFor` to pass the index of the cliked element to the parent's event listener, like so:

##### pokemon-home.component.html

```html
<div *ngFor="let pokemon of data; let i = index ">
    <pokemon [pokemonData]="pokemon" 
             (removePokemonEvent)="removePokemonByIndex(i)"></pokemon>
  </div>
```

##### pokemon-home.component.ts

```javascript
removePokemonByIndex(index) {
    // or use something like immutable.js :)
    this.data.splice(index,1);
  }
```
