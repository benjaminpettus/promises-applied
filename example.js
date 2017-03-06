function get(url) {
  return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function() {
      if (req.status === 200) {
        resolve(req.response);
      } else {
        reject(Error(req.statusText));
      }
    };
    req.onerror = function() {
      reject(Error('Network Error'));
    };
    req.send();
  });
}

window.addEventListener('WebComponentsReady', function() {
  home = document.querySelector('section[data-route="home"]');
  get('../data/earth-like-results.json')
  .then(function(response) {
    addSearchHeader(response);
  })
  .catch(function(error) {
    addSearchHeader('unknown');
    console.log(error);
  });
});
})(document);
