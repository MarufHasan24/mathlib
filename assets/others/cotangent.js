/*
Title : cotangent.js
Author : Maruf Hasan
Description : result = the value of cotangent
Date : 18 October , 2021
*/

//dependencies
const handelar = require("./../../.localhandelar.js");
const { rad2Deg } = require("./../conversations/degree_radian.js");
//main function to export
function cot(radian) {
  let result;
  let d = typeof radian === "number" ? radian : NaN;
  if (((rad2Deg(d / 90) % 4) - 1 === 0 || rad2Deg(d) === 90) && d !== NaN) {
    result = 0;
  } else if (d !== NaN && !(rad2Deg(d) % 360 === 0 || rad2Deg(d) === 0)) {
    result = 1 / Math.tan(d);
  } else if ((rad2Deg(d) % 360 === 0 || rad2Deg(d) === 0) && d !== NaN) {
    result = Infinity;
  } else {
    handelar.error("a number", "radian", "cot()");
  }
  handelar.record(result, radian, "cot");
  return handelar.mood(result);
}

//export and share
module.exports = cot;
