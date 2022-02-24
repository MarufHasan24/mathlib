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
    typeof input === "string" || typeof input === "number" ? input : false;
  let result;
  if (inp !== false) {
    if (typeof inp === "number") {
      let inpNumber = deg2Rad(inp).radian;
      if (inp % 180 === 0) {
        result = 0;
      } else {
        result = Math.cos(inpNumber);
      }
    } else if (typeof inp === "string") {
      let regXp = /(\dπ)/gi;
      let inpString = inp.search(regXp) >= 0 ? inp : false;
      if (inpString !== false) {
        let linp = rad2Deg(inpString).degree;
        if (linp % 90 === 0 && linp % 180 !== 0) {
          result = 0;
        } else if (input === "0") {
          result = 1;
        } else {
          result = Math.cos(linp);
        }
      } else {
        handelar.error("a valid string with a π", "input", "cosx");
      }
    } else {
      handelar.error("a number or a string", "input", "cosx");
    }
  } else {
    if (inp === false) {
      handelar.error("a number or a string", "input", "cosx");
    } else {
      console.error("Somthing went wrong in cosx()");
    }
  }
  handelar.record(result, input, "cosx");
  return handelar.mood(result);
}

//export and share
module.exports = cosx;
