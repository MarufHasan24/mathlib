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
    num[i] = typeof number[i] === "number" ? number[i] : false;
    if (num[i] !== false) {
      sum += num[i];
    } else {
      if (num[i] === false) {
        handelar.error("a number", `${i + 1}no. number`, "average");
      } else {
        console.error("Somthing went wrong in average()");
      }
    }
  }
  result = sum / num.length;
  handelar.record(result, { numbers: [...num] }, "avarage");
  return handelar.mood(result);
}

//export and share
module.exports = average;
