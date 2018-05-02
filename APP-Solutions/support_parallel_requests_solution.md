Didn't have time for a write up on this one :)

Please see this stackblitz:
https://stackblitz.com/edit/example-forkjoin

The main change is to pokemon-data.service.ts. It's now parsing its input to see if it contains comma separated values, and then creating a url for each of those values. It then creates an observable for each of those requests, and uses Observable.forkJoin to wait until all of the requests have completed, before emiting data to the UI.

There are also some minor changes in PokemonHomeComponent.html, and in PokemonHomeComponent.ts to consume this data.
