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
      : NaN;
  if (num) {
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
  } else if (num === 0) {
    result = result;
  } else {
    handelar.error(
      "a valid number",
      "number",
      "fact()",
      TypeError,
      "Be sure the number is an integer type positave number"
    );
  }
  handelar.record(result, number, "fact");
  return handelar.mood(result);
}
//export and share
module.exports = fact;
