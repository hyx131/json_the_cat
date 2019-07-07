const request = require("request");


const breedFetcher = function(breedName, callback) {
  const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(URL, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }

    const data = JSON.parse(body);
    // console.log("dddddd", data[0]);
    // const breedInfo = data[0].description; //need to pass as data[0] becuase no query parameter returns empty array [];

    if (data[0]) { 
      return callback(null, data[0].description);
    } else {
      return callback(error, null);
    }
  });
};

// breedFetcher("Raj", (error, data) => {
//   if (error) {
//     console.log("Request failed: ", error);
//   } else if (data === null) {
//     console.log("Breed not found.");
//   } else {
//     console.log(data);
//   }
// });

module.exports = { breedFetcher };
