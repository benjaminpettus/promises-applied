require('es6-promise');
'use strict';

function attachTitle (lastName) {
  return 'DR. ' + lastName
}

let lastName = new Promise( function ( resolve, reject ){
  resolve('MANHATTAN');
});

lastName.then(attachTitle).then(console.log)

//OFFICIAL SOLUTION
    // function attachTitle(name) {
    //   return 'DR. ' + name;
    // }
    //
    // Promise.resolve('MANHATTAN')
    //   .then(attachTitle)
    //   .then(console.log)
