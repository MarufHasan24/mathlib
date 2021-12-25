/*
Title : 
Author : Maruf Hasan
Description :
Date : 
*/

//dependencies
const handelar = require("./../../.localhandelar.js");

//main function to export
function leapYear(year) {
  let result;
  let num = typeof year === "number" ? year : NaN;
  if (num % 100 === 0) {
    if (num % 400 === 0) {
      result = true;
    } else {
      result = false;
    }
  } else {
    if (num % 4 === 0) {
      result = true;
    } else {
      result = false;
    }
  }
  handelar.record(result, year, "leapYear");
  return handelar.mood(result);
}
//export amd share
module.exports = leapYear;
