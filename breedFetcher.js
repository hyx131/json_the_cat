const request = require("request");


const breedFetcher = function(breedName, callback) {
  const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(URL, (error, response, body) => {
    if (error) {
      return callback(error);
    }

    const data = JSON.parse(body);
    const breedInfo = data[0].description; //need to pass as data[0] becuase no query parameter returns empty array [];

    if (breedInfo) { 
      return callback(null, breedInfo);
    } else {
      return callback(error);
    }
  });
};

module.exports = { breedFetcher };