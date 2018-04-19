import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PokemonDataService {

       url = 'https://pokeapi.co/api/v2/pokemon/150';

       constructor(private http: HttpClient) {}

       getPokemon(): Observable<any> {
           return this.http.get(this.url);
       }
}