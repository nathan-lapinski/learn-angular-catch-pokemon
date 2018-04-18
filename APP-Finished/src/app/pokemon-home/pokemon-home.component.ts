import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-home',
  templateUrl: './pokemon-home.component.html',
  styleUrls: ['./pokemon-home.component.css']
})
export class PokemonHomeComponent implements OnInit {

  data = [  
    { 
       "id": 5,
       "name": "charmeleon",
       "height": 11,
       "is_default": true,
       "order": 6,
       "weight": 190,
       "sprites": { 
           "back_female": null,
           "back_shiny_female": null,
           "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/5.png",
           "front_female": null,
           "front_shiny_female": null,
           "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/5.png",
           "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
           "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/5.png" 
       }
    },
    {
       "id":54,
       "name":"psyduck",
       "height":8,
       "is_default":true,
       "order":83,
       "weight":196,
       "sprites":{
         "back_female":null,
         "back_shiny_female":null,
         "back_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/54.png",
         "front_female":null,
         "front_shiny_female":null,
         "back_shiny":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/54.png",
         "front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
         "front_shiny":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/54.png"
      }
   },
   {
      "id":94,
      "name":"gengar",
      "height":15,
      "is_default":true,
      "order":133,
      "weight":405,
      "sprites":{
         "back_female":null,
         "back_shiny_female":null,
         "back_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/94.png",
         "front_female":null,
         "front_shiny_female":null,
         "back_shiny":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/94.png",
         "front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
         "front_shiny":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/94.png"
      }
   }
   ];

  constructor() { }

  ngOnInit() {
  }

}
