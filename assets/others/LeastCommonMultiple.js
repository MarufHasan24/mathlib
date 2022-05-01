/*
Title : LeastCommonMultiple.js
Author : Maruf Hasan
Description : find out the Greatest common divisor of numbers
Date : 5 March, 2022
*/

//dependencies
const handelar = require("./../../.localhandelar");
const GCD = require("./GreatestCommonDivisor");

/* Main function to export */
function LCM(...num) {
  num.forEach((e, i, a) => {
    if (typeof e !== "number") {
      handelar.error("a number of same sing", `${i}no.`, "LCM");
    } else {
      a[i] = e;
    }
  });
  let itsOkNow = checkEveryoneIsSame(num);
  if (itsOkNow[0]) {
    let result = [num[0]],
      _GCD;
    if (num.length >= 2) {
      for (let i = 0; i < num.length - 1; i++) {
        _GCD = GCD(result, num[i + 1]);
        result = (result / _GCD) * num[i + 1];
      }
      return handelar.mood(result);
    } else {
      handelar.error("2 or more number", `num`, "LCM");
    }
  } else {
    if (!itsOkNow[0]) {
      handelar.error("2 or more number", `num`, "LCM");
    } else {
      console.error("somthing went wrong in LCM()");
    }
  }
}
function checkEveryoneIsSame(nums) {
  let sym = [...nums];
  let i = 0;
  const frst = sym[0] / Math.abs(sym[0]);
  let num = true;
  while (num && i < sym.length) {
    sym[i] = sym[i] / Math.abs(sym[i]);
    if (sym[i] === frst) {
      num = true;
      i++;
    } else {
      num = false;
    }
  }
  return [num, frst];
}

module.exports = LCM;
