/*
Title: tringleArea.js
Author: Maruf Hasan
Description: get area of a tringle by its dots
Date: 17 October , 2021 
*/

//dependencies
const handelar = require("./../../.localhandelar.js");
//main function to export
function tringleArea(
  first_point = [0, 0],
  second_point = [0, 0],
  third_point = [0, 0]
) {
  let fspnt =
      Array.isArray(first_point) && first_point.length === 2
        ? first_point
        : false,
    scpnt =
      Array.isArray(second_point) && second_point.length === 2
        ? second_point
        : false,
    trpnt =
      Array.isArray(third_point) && third_point.length === 2
        ? third_point
        : false;
  if (fspnt !== false && scpnt !== false && trpnt !== false) {
    let d = {
      x1: fspnt[0],
      y1: fspnt[1],
      x2: scpnt[0],
      y2: scpnt[1],
      x3: trpnt[0],
      y3: trpnt[1],
    };
    let area = Math.abs(
      0.5 * (d.x1 * (d.y2 - d.y3) + d.x2 * (d.y3 - d.y1) + d.x3 * (d.y1 - d.y2))
    );
    handelar.record(
      area,
      { first_point, second_point, third_point },
      "tringleArea"
    );
    return handelar.mood(area);
  } else {
    if (fspnt === false) {
      handelar.error(
        "an array contains 2 numbers[x,y]",
        "first_point",
        "tringleArea"
      );
    } else if (scpnt === false) {
      handelar.error(
        "an array contains 2 numbers[x,y]",
        "second_point",
        "tringleArea"
      );
    } else if (trpnt === false) {
      handelar.error(
        "an array contains 2 numbers[x,y]",
        "third_point",
        "tringleArea"
      );
    } else {
      console.error("Something went wrong in tringleArea()");
    }
  }
}

//export and share
module.exports = tringleArea;
