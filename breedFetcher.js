const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      if (data[0] === undefined) {
        callback(undefined, undefined);
      } else {
        callback(error, data[0].description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };
