/*
Title : linearEquation.js
Author : Maruf Hasan
Description : solve the linear equations (ax + by = c)
Date : , 2021
*/

// dependencies
const handelar = require("../.localhandelar");

//main function to export
function linearEq(first_Equation = [0, 0, 0], second_Equation = [0, 0, 0]) {
  let fstEq =
    Array.isArray(first_Equation) && first_Equation.length === 3
      ? first_Equation
      : false;
  let secEq =
    Array.isArray(second_Equation) && second_Equation.length === 3
      ? second_Equation
      : false;
  if (fstEq !== false && secEq !== false) {
    //@gettin all data;
    let a1 = typeof fstEq[0] === "number" ? fstEq[0] : false,
      b1 = typeof fstEq[1] === "number" ? fstEq[1] : false,
      c1 = typeof fstEq[2] === "number" ? fstEq[2] : false,
      a2 = typeof secEq[0] === "number" ? secEq[0] : false,
      b2 = typeof secEq[1] === "number" ? secEq[1] : false,
      c2 = typeof secEq[2] === "number" ? secEq[2] : false;
    if (
      a1 !== false &&
      b1 !== false &&
      c1 !== false &&
      a2 !== false &&
      b2 !== false &&
      c2 !== false
    ) {
      //declireing results main object
      let result = {};
      let x = !Number.isNaN((c1 * b2 - c2 * b1) / (a1 * b2 - b1 * a2))
        ? (c1 * b2 - c2 * b1) / (a1 * b2 - b1 * a2)
        : false;
      let y = !Number.isNaN((c1 * a2 - c2 * a1) / (b1 * a2 - a1 * b2))
        ? (c1 * a2 - c2 * a1) / (b1 * a2 - a1 * b2)
        : false;
      if (x !== false && y !== false) {
        result = { x, y };
        return handelar.record(
          result,
          { first_Equation, second_Equation },
          "linear"
        );
      } else {
        return handelar.mood("no solve found");
      }
    } else {
      if (a1 === false) {
        handelar.error("a number", "1st value of first_Equation", "linearEq");
      } else if (b1 === false) {
        handelar.error("a number", "1st value of first_Equation", "linearEq");
      } else if (a2 === false) {
        handelar.error("a number", "2nd value of second_Equation", "linearEq");
      } else if (b2 === false) {
        handelar.error("a number", "2nd value of second_Equation", "linearEq");
      } else if (c1 === false) {
        handelar.error("a number", "3rd value of first_Equation", "linearEq");
      } else if (c2 === false) {
        handelar.error("a number", "3rd value of second_Equation", "linearEq");
      } else {
        console.error("Somthing went wrong in linearEq");
      }
    }
  } else {
    if (fstEq === false) {
      handelar.error(
        "an array contains [a,b,c] 3 numeric values",
        "first_Equation",
        "linearEq"
      );
    } else if (secEq === false) {
      handelar.error(
        "an array contains [a,b,c] 3 numeric values",
        "second_Equation",
        "linearEq"
      );
    } else {
      console.error("Somthing went wrong in linearEq");
    }
  }
}

//export and share
module.exports = linearEq;
