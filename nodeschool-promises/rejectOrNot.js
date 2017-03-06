'use strict';

var promise = new Promise( function( fulfill, reject ) {
  fulfill("I FIRED");
  reject( new Error("I DID NOT FIRE"));
})



// function onRejected( error ) {
//   console.log( error.message );
// }
//
// promise.then(console.log, onRejected);
.then(
  (response) => {console.log(response)},
  (reject) => {console.log(Error.message)}
);
