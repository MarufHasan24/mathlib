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
  let bs = typeof base === "number" ? base : NaN,
    ang = typeof angle === "number" ? angle : false;
  if (bs !== 1 && bs > 0 && ang > 0) {
    let result = Math.log10(ang) / Math.log10(bs);
    handelar.record(result, { base, angle }, "logx");
    return handelar.mood(result);
  } else {
    if (!bs || bs === 1) {
      handelar.error(
        "a number whish is grater than 0 and not 1",
        "base",
        "logx()"
      );
    } else {
      handelar.error("a number whish is grater than 0", "angle", "logx()");
    }
  }
}

//export and share
module.exports = logx;
