/*
Title : sine.js
Author : Maruf Hasan
Description : calculate the valu of sine; 
Date : 24 October, 2021
*/

//dependencies
const handelar = require("./../../.localhandelar.js");
const { deg2Rad } = require("./../conversations/degree_radian.js");
const { rad2Deg } = require("./../conversations/degree_radian.js");

//main function to export
function sinx(input = 0) {
  let result;
  let inp =
    typeof input === "string" || typeof input === "number" ? input : false;
  if (inp !== false) {
    if (typeof input === "number") {
      let inp = deg2Rad(input).radian;
      if (input % 180 === 0) {
        result = 0;
      } else {
        result = Math.sin(inp);
      }
    } else if (typeof input === "string") {
      let regXp = /(\dπ)/gi;
      let inp =
        input.search(regXp) >= 0
          ? parseFloat(input.substring(0, input.search(regXp) + 1)) * Math.PI
          : false;
      if (inp !== false) {
        let linp = rad2Deg(inp);
        if (linp % 180 === 0 && input !== "0") {
          result = 0;
        } else if (input === "0") {
          result = 0;
        } else {
          result = Math.sin(inp);
        }
      } else {
        handelar.error("a valid string with a π", "input", "sinx");
      }
    } else {
      handelar.error("a valid string or a number", "input", "sinx");
    }
  } else {
    handelar.error("a string or a number", "input", "sinx");
  }
  handelar.record(result, input, "sinx");
  return handelar.mood(result);
}

//export and share
module.exports = sinx;
