/*
Title : LeastCommonMultiple.js
Author : Maruf Hasan
Description : find out the Greatest common divisor of numbers
Date : 5 March, 2022
*/

//dependencies
const handelar = require("./../.localhandelar");

/* Main function to export */
function LCM(...num) {
  let result = [num[0]],
    GCD;
  if (num.length >= 2) {
    for (let i = 0; i < num.length - 1; i++) {
      GCD = GCD(result, num[i + 1]);
      result = (result / GCD) * num[i + 1];
    }
    return result;
  } else {
    handelar.error();
  }
}
module.exports = LCM;
