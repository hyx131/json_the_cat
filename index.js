const { breedFetcher } = require("./breedFetcher");

const args = process.argv.slice(2);
const breedName = args[0];

breedFetcher(breedName, (error, data) => {
  if (error) {
    console.log("Request failed: ", error);
  } else if (data === null) {
    console.log("Breed not found.");
  } else {
    console.log(data);
  }
});

