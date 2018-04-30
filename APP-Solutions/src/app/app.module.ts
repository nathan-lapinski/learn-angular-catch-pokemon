import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { PokemonHomeComponent } from './pokemon-home/pokemon-home.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonDataService } from './pokemon-home/pokemon-data.service';


@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    PokemonHomeComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    PokemonDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
