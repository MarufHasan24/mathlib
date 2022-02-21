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
      : undefined;
  let secEq =
    Array.isArray(second_Equation) && second_Equation.length === 3
      ? second_Equation
      : undefined;
  if (fstEq && secEq) {
    //@gettin all data;
    let a1 =
        typeof fstEq[0] === "number"
          ? fstEq[0]
          : handelar.error(
              "a number",
              "1st value of first_Equation",
              "linearEq()"
            ),
      b1 =
        typeof fstEq[1] === "number"
          ? fstEq[1]
          : handelar.error(
              "a number",
              "2nd value of first_Equation",
              "linearEq()"
            ),
      c1 =
        typeof fstEq[2] === "number"
          ? fstEq[2]
          : handelar.error(
              "a number",
              "3rd value of first_Equation",
              "linearEq()"
            ),
      a2 =
        typeof secEq[0] === "number"
          ? secEq[0]
          : handelar.error(
              "a number",
              "1st value of second_Equation",
              "linearEq()"
            ),
      b2 =
        typeof secEq[1] === "number"
          ? secEq[1]
          : handelar.error(
              "a number",
              "2nd value of second_Equation",
              "linearEq()"
            ),
      c2 =
        typeof secEq[2] === "number"
          ? secEq[2]
          : handelar.error(
              "a number",
              "3rd value of second_Equation",
              "linearEq()"
            );
    //declireing results main object
    let result = {};
    let x = (c1 * b2 - c2 * b1) / (a1 * b2 - b1 * a2);
    let y = (c1 * a2 - c2 * a1) / (b1 * a2 - a1 * b2);
    if (x !== false && y !== false) {
      result = { x, y };
      handelar.record(result, { first_Equation, second_Equation }, "linear");
      return handelar.mood(result);
    } else {
      return "no solve found";
    }
  } else {
    if (!fstEq) {
      handelar.error(
        "an array contains [a,b,c] 3 numeric values",
        "first_Equation",
        "linear()"
      );
    } else {
      handelar.error(
        "an array contains [a,b,c] 3 numeric values",
        "second_Equation",
        "linear()"
      );
    }
  }
}

//export and share
module.exports = linearEq;
