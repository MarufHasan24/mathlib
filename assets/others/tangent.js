/*
Title : 
Author : Maruf Hasan
Description :
Date : 6 december, 2021
*/

//dependencies
const handelar = require("./../../.localhandelar.js");
const { rad2Deg } = require("./../conversations/degree_radian.js");
const { deg2Rad } = require("./../conversations/degree_radian.js");
const odd = require("./odd.js");

//main function to export
function tanx(input = 0) {
  let result;
  let regXp = /(\dπ)/gi;
  if (typeof input === "number") {
    result = local(deg2Rad(input));
  } else if (typeof input === "string") {
    if (input.search(regXp) >= 0) {
      let i = parseFloat(input.substring(0, input.search(regXp) + 1));
      result = local(i * Math.PI);
    } else {
      throw error;
    }
  } else {
    throw error;
  }
  handelar.record(result, input, "tanx");
  return handelar.mood(result);
}

//local function, not to export
function local(d) {
  if (d !== false) {
    if (odd(rad2Deg(d / 90) % 4) || rad2Deg(d) === 90) {
      return Infinity;
    } else if (rad2Deg(d) % 180 === 0 || rad2Deg(d) === 0) {
      return 0;
    } else {
      return Math.tan(d);
    }
  } else {
    handelar.error("a number", "input", "tanx()");
  }
}

//export and share
module.exports = tanx;
