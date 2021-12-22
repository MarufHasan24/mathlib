/*
Title : Odd
Author : Maruf Hasan
Description : cheak the number is odd or not
Date : 7 December, 2021
*/

//dependencies
const handelar = require("./../../.localhandelar");

//main function to export
function odd(number) {
  if (typeof number === "number" && Number.isSafeInteger(number)) {
    if (number % 2 !== 0) {
      handelar.record(true, number, "odd");
      return true;
    } else {
      handelar.record(false, number, "odd");
      return false;
    }
  } else {
    handelar.error("a natural number", "number", "odd()");
  }
}

//export and share
module.exports = odd;
