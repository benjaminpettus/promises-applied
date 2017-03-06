require('es6-promise');
'use strict';

first().then( ( result ) => second( result )).then(console.log);

// let firstPromise = first();
//
// let secondPromise = firstPromise.then(function(val) {
//   return second(val);
// })
//
// secondPromise.then(console.log);


// As an alternative to the code above, ou could also do this:
// first().then(second).then(console.log);
// const first = () => Promise.resolve('hot dogs')
// const second = (food) => "i like" + food
//
// first()
//   .then( (food) => {
//     return second(food)
//   })
//   .then((message) => {
//     console.log(message)
//   })
