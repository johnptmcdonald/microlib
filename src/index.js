const uniqueRandomArray = require("unique-random-array");
const names = require("./names.json");

module.exports = {
  all: names,
  random: uniqueRandomArray(names),
};
