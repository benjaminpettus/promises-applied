require('es6-promise');
'use strict'

var promise = new Promise( function ( fulfill, reject ) {
  setTimeout( () => fulfill('FULFILLED!'), 300 );
})
//have to fulfill the promis with a value that is passed from above
.then((val) => console.log(val));
