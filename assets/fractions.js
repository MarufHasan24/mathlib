/*
Title : fractions.js
Author : Maruf Hasan
Description : get fraction of a number
Date : 30 november, 2021
*/

//dependencies
const handelar = require("../.localhandelar");

//main function to export
function main(input) {
  for (let i = 1; i <= 999; i++) {
    if (Number.isInteger(input * i)) {
      result = [[input * i, i], `${input * i}/${i}`];
    }
  }
}

function fract(input) {
  let result;
  if (main(input)) {
    result = main(input);
  } else {
    let srt = `${input}`,
      regex = /(\.)/gi;
    if (srt.search(regex) === 0) {
      result = srt;
    } else if (Number.isInteger(input / Math.PI)) {
      result = [`${input / Math.PI}π`];
    } else if (srt.search(regex) > 0) {
      let int = parseInt(srt.substring(0, srt.search(regex))),
        // intln = int.length,
        flot = parseInt(srt.substring(srt.search(regex) + 1)),
        flotln = srt.substring(srt.search(regex) + 1).length;
      var into = 10;
      for (let i = 1; i < flotln; i++) {
        into *= 10;
      }
      result = [[int * into + flot, into], `${int * into + flot}/${into}`];
    } else {
      handelar.error("A number", "input", "fract()");
    }
  }
  handelar.record(result, input, "fract");
  return handelar.mood(result);
}

//export and share
module.exports = fract;
