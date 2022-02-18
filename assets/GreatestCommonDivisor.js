/*
Title : GreatestCommonDivisor.js
Author : Maruf Hasan
Description : find out the Greatest common divisor of numbers
Date : 18 February, 2022
*/

//dependencies
const handelar = require("./../.localhandelar");

function GCD(...numbers) {
  let result;
  let nums = [...numbers];
  if (nums.length >= 2) {
    let checkData = checkEveryoneIsSame(nums);
    if (checkData[0]) {
      nums.forEach((e, i, a) => {
        a[i] = Math.abs(e);
      });
      let decider = true,
        i = 0,
        destination = Math.min(...nums),
        resultArray = [];
      while (decider && i < nums.length - 1) {
        for (let j = 1; j <= destination; j++) {
          if (
            Number.isInteger(nums[i] / j) &&
            Number.isInteger(nums[i + 1] / j)
          ) {
            decider = true;
            resultArray.push(j);
          } else {
            decider = false;
          }
        }
        i++;
      }
      result =
        resultArray.sort(function (a, b) {
          return b - a;
        })[0] * checkData[1];
    } else {
      handelar.error("numbers must have same sign", "numbers", "GCD()");
    }
  } else {
    handelar.error("2 or more number", "numbers", "GCD()");
  }
  handelar.record(result, numbers, "GCD");
  return handelar.mood(result);
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

module.exports = GCD;
