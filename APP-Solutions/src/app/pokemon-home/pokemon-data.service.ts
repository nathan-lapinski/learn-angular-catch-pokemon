import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PokemonDataService {

       url = 'https://pokeapi.co/api/v2/pokemon/';

       constructor(private http: HttpClient) {}

       getPokemon(id: number): Observable<any> {
           const fetchUrl = this.url + id;
           return this.http.get(fetchUrl);
       }
}