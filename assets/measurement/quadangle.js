/*
Title : quadangle.js
Author : Maruf Hasan
Description : some info about the quadangle
Date : 19 October , 2021
*/

//dependencies
const handelar = require("./../../.localhandelar.js");
const quadArea = require("./quadanglearea.js");
const quadAngles = require("./quadangleangles.js");
const quadLines = require("./quadanglelines.js");
const quadCorners = require("./quadanglecorners.js");

//main function to export
function quad(
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
    let obj = {
      ...quadLines(fspnt, scpnt, trpnt, frpnt),
      ...quadAngles(fspnt, scpnt, trpnt, frpnt),
      ...quadCorners(fspnt, scpnt, trpnt, frpnt),
    };
    obj.area = quadArea(fspnt, scpnt, trpnt, frpnt);
    handelar.record(
      obj,
      { first_point, second_point, third_point, fourth_point },
      "quad"
    );
    return obj;
  } else {
    if (fspnt === false) {
      handelar.error(
        "an array contains 2 numbers[x,y]",
        "first_point",
        "quadLines()"
      );
    } else if (scpnt === false) {
      handelar.error(
        "an array contains 2 numbers[x,y]",
        "second_point",
        "quadLines()"
      );
    } else if (trpnt === false) {
      handelar.error(
        "an array contains 2 numbers[x,y]",
        "third_point",
        "quadLines()"
      );
    } else if (frpnt === false) {
      handelar.error(
        "an array contains 2 numbers[x,y]",
        "fourth_point",
        "quadLines()"
      );
    } else {
      console.error("Something went wrong in quadLines()");
    }
  }
}

//export and share
module.exports = quad;
