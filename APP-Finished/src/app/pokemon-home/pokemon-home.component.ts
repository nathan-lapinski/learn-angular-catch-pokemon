import { Component, OnInit } from '@angular/core';

import { PokemonDataService } from './pokemon-data.service';

@Component({
  selector: 'app-pokemon-home',
  templateUrl: './pokemon-home.component.html',
  styleUrls: ['./pokemon-home.component.css']
})
export class PokemonHomeComponent implements OnInit {

  data = [];

  constructor(private pokemonService: PokemonDataService) { }

  ngOnInit() {
    this.pokemonService.getPokemon().subscribe((pokemonData) => {
      this.data.push(pokemonData);
    });
  }

}
