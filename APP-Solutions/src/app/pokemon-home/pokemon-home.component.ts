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
  }

  getPokemonById(id: number) {
    this.pokemonService.getPokemon(id).subscribe((pokemonData) => {
      this.data.push(pokemonData);
    });
  }

  removePokemonByIndex(index) {
    this.data.splice(index,1);
  }

  addNickname(nickname: string, index: number) {
    this.data[index].nickname = nickname;
  }
}
