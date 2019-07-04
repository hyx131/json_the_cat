const request = require("request");
const args = process.argv.slice(2);
const breedName = args[0];
const catBreedURL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

const breedFetcher = function(URL, callback) {
  request(URL, (error, response, body) => {
    if (error) {
      return callback(error);
    }

    const data = JSON.parse(body);
    const ObjBreedInfo = data[0]; //need to pass as data[0] becuase no query parameter returns empty array [];

    if (ObjBreedInfo) { 
      callback(null, ObjBreedInfo);
    } else {
      throw `${breedName} cannot be found.`;
    }
  });
};

breedFetcher(catBreedURL, (error, data) => {
  if (error) {
    console.log("Request failed: ", error);
  } else {
    console.log(data.description);
  }});