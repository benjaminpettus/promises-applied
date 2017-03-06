require('es6-promise')
'use strict';

let q = require('q');

function iterate(num) {
  console.log(num);
  return num + 1;
}

function alwaysThrows () {
  throw Error("OH NOES");
}

Promise.resolve(iterate(1))
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(alwaysThrows)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .catch(console.log);
