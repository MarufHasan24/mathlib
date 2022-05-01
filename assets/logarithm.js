/*
Title : logarithm.js
Author : Maruf Hasan
Description : get the logarithm of an angle with custom base
Date : 16 October , 2021
*/

// dependencies
const handelar = require("../.localhandelar");

//main function to export
function logx(base, angle) {
  let bs = typeof base === "number" && base !== 1 && base > 0 ? base : false,
    ang = typeof angle === "number" && angle > 0 ? angle : false;
  if (bs !== false && ang !== false) {
    let result = Math.log10(ang) / Math.log10(bs);
    handelar.record(result, { base, angle }, "logx");
    return handelar.mood(result);
  } else {
    if (bs === false) {
      handelar.error(
        "a number whish is grater than 0 and not 1",
        "base",
        "logx"
      );
    } else if (ang === false) {
      handelar.error("a number whish is grater than 0", "angle", "logx");
    } else {
      console.error("Somthing went wrong in logx()");
    }
  }
}

//export and share
module.exports = logx;
