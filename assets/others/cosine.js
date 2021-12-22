/*
Title : cosine.js
Author : Maruf Hasan
Description : calculate the valu of cosine; 
Date : 26 October, 2021
*/

//dependencies
const handelar = require("./../../.localhandelar.js");
const { deg2Rad } = require("./../conversations/degree_radian.js");
const { rad2Deg } = require("./../conversations/degree_radian.js");

//main function to export
function cosx(input = 0) {
  let inp =
    typeof input === "string" || typeof input === "number" ? input : null;
  let result;
  if (inp !== null) {
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
          : null;
      let linp = rad2Deg(inp);
      if (linp % 90 === 0 && linp % 180 !== 0) {
        result = 0;
      } else if (input === "0") {
        result = 1;
      } else {
        result = Math.cos(inp);
      }
    } else {
      handelar.error("a number or a string", "input", "cosx");
    }
  } else {
    handelar.error("a number or a string", "input", "cosx");
  }
  handelar.record(result, input, "cosx");
  return handelar.mood(result);
}

//export and share
module.exports = cosx;
