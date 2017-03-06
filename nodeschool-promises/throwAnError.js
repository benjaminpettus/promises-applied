require('es6-promise')
'use strict';

var parsePromised = function(json){
  return new Promise(function( fulfill, reject) {
    try {
      fulfill(JSON.parse(json));
    } catch(e) {
      reject(e);
    }
  });
};


parsePromised(process.argv[2])
  .then(null, console.log)
