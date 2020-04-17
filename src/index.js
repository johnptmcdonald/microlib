const uniqueRandomArray = require("unique-random-array");
import names from "./names.json";

const random = (num) => {
  if (num === undefined) {
    return uniqueRandomArray(names)();
  } else {
    let randomItems = [];
    for (let i = 0; i < num; i++) {
      randomItems.push(uniqueRandomArray(names)());
    }
    return randomItems;
  }
};

module.exports = {
  all: names,
  random: random,
};
