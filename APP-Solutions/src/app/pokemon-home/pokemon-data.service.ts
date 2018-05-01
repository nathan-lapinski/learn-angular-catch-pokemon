import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import "rxjs";

@Injectable()
export class PokemonDataService {

       url = 'https://pokeapi.co/api/v2/pokemon/';

       constructor(private http: HttpClient) {}

       getPokemon(ids: string): Observable<any> {
        let urls = [];

        if (this.isMultiReq(ids)) {
          urls = this.generateUrls(ids);
        } else {
          urls.push(this.url + ids);
        }
        
        return Observable.forkJoin(...urls.map(strUrl => this.http.get(strUrl)));
    }

    isMultiReq(str): boolean {
      return str.indexOf(',') > -1;
    }

    generateUrls(str): string[] {
      let ids = str.split(',');
      return ids.map(val => this.url + val);
    }
}