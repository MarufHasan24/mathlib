/*
Title : Summation
Author : Maruf Hasan
Description : sum of limited  Natural numbers
Date : 5 October , 2021
*/

//dependencies
const handelar = require("./../../.localhandelar.js");

//main function to export
function sums(end, start = 0) {
  let srt = typeof start === "number" ? start : false;
  let result = srt;
  let num = typeof end === "number" ? end : false;
  if (num && srt !== false) {
    for (let i = 1; i <= num; i++) {
      result += i;
    }
  } else {
    if (!num) {
      handelar.error("a number", "end", "sums()");
    } else {
      handelar.error("a number", "start", "sums()");
    }
  }
  handelar.record(result, { end, start }, "sums");
  return handelar.mood(result);
}

//export and share
module.exports = sums;
