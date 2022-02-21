/*
Title : cosecant.js
Author : Maruf Hasan
Description : return the value of cosecant
Date : 18 October , 2021
*/

//dependencies
const handelar = require("./../../.localhandelar.js");

//main function to export
function cosec(radian) {
  let result;
  let d = typeof radian === "number" ? radian : false;
  if (d !== false) {
    result = 1 / Math.sin(d);
  } else {
    handelar.error("a number", "radian", "cosec()");
  }
  handelar.record(result, radian, "cosec");
  return handelar.mood(result);
}

//export and share
module.exports = cosec;
