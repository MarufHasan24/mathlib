/*
Title : GreatestCommonDivisor.js
Author : Maruf Hasan
Description : find out the Greatest common divisor of numbers
Date : 18 February, 2022
*/

//dependencies
const handelar = require("./../../.localhandelar");
const intersection = require("./intersection");

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
      resultSet = new Set();
      while (decider && i < nums.length - 1) {
        global[`set${i}`] = new Set();
        for (let j = 1; j <= destination; j++) {
          if (
            Number.isInteger(nums[i] / j) &&
            Number.isInteger(nums[i + 1] / j)
          ) {
            decider = true;
            global[`set${i}`].add(j);
          } else {
            decider = true;
          }
          if (i >= 1 && j === destination) {
            resultSet = intersection(global.set0, global[`set${i}`]);
          } else if (i === 0) {
            resultSet = global.set0;
          }
        }
        i++;
      }
      resultArray = Array.from(resultSet);
      result =
        resultArray.sort(function (a, b) {
          return b - a;
        })[0] * checkData[1];
    } else {
      if (checkData[0] === false) {
        handelar.error(
          "numbers must have same sign and not 0",
          "numbers",
          "GCD"
        );
      } else {
        console.error("Somthing went wrong in GCD()");
      }
    }
  } else {
    handelar.error("2 or more number", "numbers", "GCD");
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
