require('es6-promise');
'use strict'

var promise = new Promise( function ( fulfill, reject ) {
  setTimeout( () =>  reject(new Error( 'REJECTED!')), 300 );
})
// .then(null, onReject);
//
// function onReject ( error ) {
//   console.log( error.message );
// }

promise.then(
  (result) => {console.log('Good', result)},
  (error) =>{console.log(error.message)}
)
