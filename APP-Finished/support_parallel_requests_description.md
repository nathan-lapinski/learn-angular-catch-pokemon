# Support Parallel Requests
As a user, It'd be awesome if I could specify a list of comma separated pokemon names and ids, and have those get requests execute in parallel.

Example:
user types  charmander,45,mewtwo


### Notes

One way of solving this is to execute all requests at once, then wait until they have all finished before returning results to the ui. Sort of like Promise.all(), but with Observables instead.

### Resources and Hints

https://www.learnrxjs.io/operators/combination/forkjoin.html
http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#static-method-forkJoin