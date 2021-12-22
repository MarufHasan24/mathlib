/*
Title : average.js
Author : Maruf Hasan
Description : found a average number between 2 or more number
Date : 29 october, 2021
*/

// dependencies
const handelar = require("../.localhandelar");

//main function to export
function average(...number) {
  var num = [],
    sum = 0;
  let result;
  for (let i = 0; i < number.length; i++) {
    num[i] =
      typeof number[i] === "number"
        ? number[i]
        : handelar.error("some numbers", "number", "average()");
    sum += num[i];
  }
  result = sum / num.length;
  handelar.record(result, { number: [...num] }, "avarage");
  return handelar.mood(result);
}

//export and share
module.exports = average;
