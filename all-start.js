function getJSON(url) {
  return get(url).then(function(response) {
    return response.json();
  });
}

window.addEventListener('WebComponentsReady', function() {
  home = document.querySelector('section[data-route="home"]');

  getJSON('../data/earth-like-results.json')
  .then(function(response) {

    addSearchHeader(response.query);

    return Promise.all(response.results.map(getJSON));
  })
  .then(function(planetData) {
    planetData.forEach(function(planet) {
      createPlanetThumb(planet);
    });
  })
  .catch(function(error) {
    console.log(error);
  });
});
})(document);
