/*
Title : Quadratic
Author : Maruf Hasan
Description : solving the  quadratic function ( ax^2 + bx + c )
Date : 4 October, 2021
*/

// dependencies
const handelar = require("../.localhandelar");

//main function to export
function qudrt(a, b, c) {
  let x1, x2, d;
  let aN = typeof a === "number" ? a : NaN;
  let bN = typeof b === "number" ? b : NaN;
  let cN = typeof c === "number" ? c : NaN;
  if (aN && bN && cN) {
    d = bN ** 2 - 4 * aN * cN;
    if (d < 0) {
      handelar.error("some valid number", "a,b,c", "qudrt()");
    } else {
      x1 = (d ** 0.5 - bN) / (2 * aN);
      x2 = (-(d ** 0.5) - bN) / (2 * aN);
      handelar.record([x1, x2], { a, b, c }, "qudrt");
      return [x1, x2];
    }
  } else {
    if (aN !== NaN) {
      handelar.error("a number", "'a'", "qudrt()");
    } else if (bN !== NaN) {
      handelar.error("a number", "'b'", "qudrt()");
    } else {
      handelar.error("a number", "'c'", "qudrt()");
    }
  }
}

//export and share
module.exports = qudrt;
