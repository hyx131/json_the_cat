const { breedFetcher } = require("../breedFetcher");
const { assert } = require("chai");

describe("breedFetcher", () => {
  it("returns a string description for valid breed, via callback.", (done) => {
    breedFetcher("Ragdoll", (error, data) => {
      assert.equal(null, error);
      const expectedDescription = "Ragdolls love their people, greeting them at the door, following them around the house, and leaping into a lap or snuggling in bed whenever given the chance. They are the epitome of a lap cat, enjoy being carried and collapsing into the arms of anyone who holds them.";
      assert.equal(expectedDescription, data);
      done();
    });
  });

  it("returns an error if breedName entered was invalid", (done) => {
    breedFetcher("Raj", (error, data) => {
      assert.equal(null, data);
      // const expectedDescription = `Breed not found.`;
      // assert.equal(expectedDescription, error);
      done();
    });
  });

});