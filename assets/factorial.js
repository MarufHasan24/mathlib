/*
Title : Factorial
Author : Maruf Hasan
Description : find out the factorial of a number like => (5!) : factorial of 5;
Date : 5 October , 2021
*/

// dependencies
const handelar = require("../.localhandelar");

//main function to export
function fact(number) {
  let result = 1;
  let num =
    typeof number === "number" && number >= 0 && Number.isInteger(number)
      ? number
      : false;
  if (num !== false) {
    if (num === 0) {
      result = result;
    } else if (num > 0) {
      for (let i = 1; i <= num; i++) {
        result *= i;
      }
    } else {
      console.error("Somthing went wrong in fact()");
    }
  } else {
    if (num === false) {
      handelar.error(
        "a valid number",
        "number",
        "fact()",
        TypeError,
        "Be sure the number is an integer type positave number"
      );
    } else {
      console.error("Somthing went wrong in fact()");
    }
  }
  handelar.record(result, number, "fact");
  return handelar.mood(result);
}
//export and share
module.exports = fact;
