# Add Nickname Option Description
As a user, I'd like to have an input elemnt that I can use to nickname a pokemon that I've captured. I'd like the nickname to be displayed instead of that pokemon's real name.

### Notes

There are multiple ways of solving this problem.
One approach would be to have the PokemonComponent's template listen for events on an input, and notify their parent when someone nicknames a pokemon.

### Resources and Hints
https://angular.io/guide/component-interaction#parent-listens-for-child-event
https://angular.io/api/common/NgForOf#local-variables  - index may come in handy :)

keyup.enter is useful for listening to enter presses on an input

$event.target.value is useful for accessing the value of an input after the enter key has been pressed.

Remember, the PokemonComponent is a presentational component! So resist the urge to manipulate any local data there. Updates should be sent to the parent, and then it should pass any updated data into the child component. 