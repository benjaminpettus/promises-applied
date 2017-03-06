'use strict';

var promise = Promise.resolve('SECRET VALUE');

promise.catch( function(err) {
  console.error('THERE IS AN ERROR!!!');
  console.error(err.message);
});

promise.reject( new Error( 'Wrong Stuffs'))
