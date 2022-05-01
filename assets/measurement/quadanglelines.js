/*
Title : quadanglelines.js
Author : Maruf Hasan
Description : measure the line's width of a quadangle
Date : 19 October , 2021
*/

//dependencies
const handelar = require("./../../.localhandelar.js");
const lineWidth = require("./lineWidth.js");

//main function to export
function quadLines(
  first_point = [0, 0],
  second_point = [0, 0],
  third_point = [0, 0],
  fourth_point = [0, 0]
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
        : false,
    frpnt =
      Array.isArray(fourth_point) && fourth_point.length === 2
        ? fourth_point
        : false;

  if (
    fspnt !== false &&
    scpnt !== false &&
    trpnt !== false &&
    frpnt !== false
  ) {
    let d = {
      x1: fspnt[0],
      y1: fspnt[1],
      x2: scpnt[0],
      y2: scpnt[1],
      x3: trpnt[0],
      y3: trpnt[1],
      x4: frpnt[0],
      y4: frpnt[1],
    };
    let line_a = lineWidth([d.x1, d.y1], [d.x2, d.y2]),
      line_b = lineWidth([d.x2, d.y2], [d.x3, d.y3]),
      line_c = lineWidth([d.x3, d.y3], [d.x4, d.y4]),
      line_d = lineWidth([d.x4, d.y4], [d.x1, d.y1]);
    let result = {
      line_a,
      line_b,
      line_c,
      line_d,
    };
    handelar.record(
      result,
      { first_point, second_point, third_point, fourth_point },
      "quadLines"
    );
    return handelar.mood(result);
  } else {
    if (fspnt === false) {
      handelar.error(
        "an array contains 2 numbers[x,y]",
        "first_point",
        "quadLines"
      );
    } else if (scpnt === false) {
      handelar.error(
        "an array contains 2 numbers[x,y]",
        "second_point",
        "quadLines"
      );
    } else if (trpnt === false) {
      handelar.error(
        "an array contains 2 numbers[x,y]",
        "third_point",
        "quadLines"
      );
    } else if (frpnt === false) {
      handelar.error(
        "an array contains 2 numbers[x,y]",
        "fourth_point",
        "quadLines"
      );
    } else {
      console.error("Something went wrong in quadLines");
    }
  }
}

//export and share
module.exports = quadLines;
