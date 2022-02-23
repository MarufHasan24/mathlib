/*
Title : quadangleangles.js
Author : Maruf Hasan
Description : measure the angles's of a quadangle
Date : 19 October , 2021
*/

//dependencies
const handelar = require("./../../.localhandelar.js");
const tringleAngles = require("./tringleangles.js");
const quadLines = require("./quadanglelines.js");
const quadArea = require("./quadanglearea.js");

//main function to export
function quadAngles(
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
    let tri1 = tringleAngles(fspnt, scpnt, frpnt),
      tri2 = tringleAngles(scpnt, trpnt, frpnt);
    let obj = { ...quadLines(fspnt, scpnt, trpnt, frpnt) };
    obj.area = quadArea(fspnt, scpnt, trpnt, frpnt);
    obj.thetaB = tri1.thetaB + tri2.thetaA;
    obj.thetaD = tri1.thetaC + tri2.thetaC;
    obj.thetaA = tri1.thetaA;
    obj.thetaC = tri2.thetaB;
    let result = {
      thetaA: obj.thetaA,
      thetaB: obj.thetaB,
      thetaC: obj.thetaC,
      thetaD: obj.thetaD,
    };
    handelar.record(
      result,
      { first_point, second_point, third_point, fourth_point },
      "quadAngles"
    );
    return result;
  } else {
    if (fspnt === false) {
      handelar.error(
        "an array contains 2 numbers[x,y]",
        "first_point",
        "quadAngles()"
      );
    } else if (scpnt === false) {
      handelar.error(
        "an array contains 2 numbers[x,y]",
        "second_point",
        "quadAngles()"
      );
    } else if (trpnt === false) {
      handelar.error(
        "an array contains 2 numbers[x,y]",
        "third_point",
        "quadAngles()"
      );
    } else if (frpnt === false) {
      handelar.error(
        "an array contains 2 numbers[x,y]",
        "fourth_point",
        "quadAngles()"
      );
    } else {
      console.error("Something went wrong in quadAngles()");
    }
  }
}

//export and share
module.exports = quadAngles;
