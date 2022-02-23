/*
Title : lineWidth.js
Author : Maruf Hasan
Description : measure the width of a line by it's dots
Date : 15 October , 2021
*/

//dependencies
const handelar = require("./../../.localhandelar.js");

//main function to export
function lineWidth(first_point = [0, 0], second_point = [0, 0]) {
  let fspnt =
      Array.isArray(first_point) && first_point.length === 2
        ? first_point
        : false,
    scpnt =
      Array.isArray(second_point) && second_point.length === 2
        ? second_point
        : false;
  let data = {
    x1: fspnt[0],
    x2: scpnt[0],
    y1: fspnt[1],
    y2: scpnt[1],
  };
  if (fspnt !== false && scpnt !== false) {
    let result;
    result = Math.pow((data.x2 - data.x1) ** 2 + (data.y2 - data.y1) ** 2, 0.5);
    handelar.record(result, { first_point, second_point }, "lineWidth");
    return handelar.mood(result);
  } else {
    if (fspnt === false) {
      handelar.error("an array [x,y]", "first_point", "lineWidth");
    } else if (scpnt === false) {
      handelar.error("an array [x,y]", "second_point", "lineWidth");
    } else {
      console.error("Something went wrong in lineWidth()");
    }
  }
}

//export and share
module.exports = lineWidth;
