/*
Title : Prime number 
Author : Maruf Hasan
Description : cheak the number is prime or not
Date : 5 October, 2021
*/

//dependencies
const handelar = require("./../../.localhandelar.js");
//main function to export
function prime(number) {
  if (typeof number === "number" && Number.isSafeInteger(number)) {
    if (number === 2) {
      handelar.record(true);
      return handelar.mood(true);
    } else if (number > 1) {
      for (let i = 2; i < number; i++) {
        if (number % i !== 0) {
          handelar.record(true, number, "prime");
          return handelar.mood(true);
        } else if (number === i * i) {
          handelar.record(false, number, "prime");
          return handelar.mood(false);
        } else {
          handelar.record(false, number, "prime");
          return handelar.mood(false);
        }
      }
    } else {
      handelar.record(false, number, "prime");
      return handelar.mood(false);
    }
  } else {
    handelar.error("a natural number", "number", "prime");
  }
}

//export and share
module.exports = prime;
