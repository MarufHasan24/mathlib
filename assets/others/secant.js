/*
Title : secant.js
Author : Maruf Hasan
Description : return secant value
Date : 18 October , 2021
*/

//dependencies
const handelar = require("./../../.localhandelar.js");

//main function to export
function sec(radian = 0) {
  let result;
  let d = typeof radian === "number" ? radian : false;
  if (d !== false) {
    result = 1 / Math.cos(d);
    handelar.record(result, radian, "sec");
    return handelar.mood(result);
  } else {
    handelar.error("a number", "radian", "sec()");
  }
}

//export and share
module.exports = sec;
