const expect = require("chai").expect;
const names = require("../index");

describe("names", () => {
  describe("all", () => {
    it("should be an array of strings", () => {
      const isArrayOfStrings = (arr) => {
        return arr.every((s) => typeof s === "string");
      };
      expect(names.all).to.satisfy(isArrayOfStrings);
    });
    it("should include Luke Skywalker", () => {
      expect(names.all).to.include("Luke Skywalker");
    });
  });
  describe("random", () => {
    it("should return a random item", () => {
      const randomItem = names.random();
      expect(names.all).to.include(randomItem);
    });
    it("should return an array of random items if passed a number", () => {
      const randomItems = names.random(3);
      expect(randomItems).to.have.length(3);
      for (randomItem of randomItems) {
        expect(names.all).to.include(randomItem);
      }
    });
  });
});
