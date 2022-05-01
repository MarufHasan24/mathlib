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
  let aN = typeof a === "number" ? a : false;
  let bN = typeof b === "number" ? b : false;
  let cN = typeof c === "number" ? c : false;
  if (aN !== false && bN !== false && cN !== false) {
    d = bN ** 2 - 4 * aN * cN;
    if (d < 0) {
      handelar.error("some valid number", "a,b,c", "qudrt");
    } else {
      x1 = (d ** 0.5 - bN) / (2 * aN);
      x2 = (-(d ** 0.5) - bN) / (2 * aN);
      handelar.record([x1, x2], { a, b, c }, "qudrt");
      return handelar.mood([x1, x2]);
    }
  } else {
    if (aN !== false) {
      handelar.error("a number", "'a'", "qudrt");
    } else if (bN !== false) {
      handelar.error("a number", "'b'", "qudrt");
    } else if (cN !== false) {
      handelar.error("a number", "'c'", "qudrt");
    } else {
      console.error("Somthing went wrong in qudrt()");
    }
  }
}

//export and share
module.exports = qudrt;
