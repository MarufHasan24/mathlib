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
  let num = typeof year === "number" ? year : false;
  if (num !== false) {
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
  } else {
    handelar.error("a year", "year", "leapYear");
  }
  handelar.record(result, year, "leapYear");
  return result;
}
//export amd share
module.exports = leapYear;
