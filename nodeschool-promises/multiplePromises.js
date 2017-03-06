require('es6-promise');
'use strict';


const all = function(promise1, promise2) {

  return new Promise(function( fulfill, reject) {
    let count = 0;
    let val = [];
    promise1.then(function(val) {
      val[0] = val;
      ++count;
      if(count >= 2){
        return fulfill(val);
      }
    });
    promise2.then(function(val) {
      val[1] = val;
      ++count;
      if(count >= 2){
        return fulfill(val);
      }
    });
    return true;
  });

};

all(getPromise1(), getPromise2())
  .then(console.log);
