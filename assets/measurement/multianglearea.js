/*
Title : multiangelarea.js
Author : Maruf Hasan
Description : take 
Date : 19 October , 2021
*/

//dependencies
const handelar = require("./../../.localhandelar.js");

//main function to export
function multiAngleArea(...dots) {
  let n = dots.length >= 3 ? dots : false;
  var d = {};
  var fresult,
    result = 0;
  for (let i = 0; i < n.length; i++) {
    if (n !== false && Array.isArray(n[i]) && n[i].length === 2) {
      d[`x${i + 1}`] = typeof n[i][0] === "number" ? n[i][0] : false;
      d[`y${i + 1}`] = typeof n[i][1] === "number" ? n[i][1] : false;
    } else {
      if (n === false) {
        throw SyntaxError(
          "An unexpected end of input : enter at least 3 dots hare"
        );
      } else if (!Array.isArray(n[i])) {
        handelar.error(
          "an array contains 2 values [x,y]",
          `${i + 1}th dot (array[x,y])`,
          "multiangelarea()"
        );
      } else {
        throw TypeError(`enter 2 values in ${i + 1} no. array`);
      }
    }
  }
  for (let i = 1; i <= n.length; i++) {
    if (i < n.length) {
      result += d[`x${i}`] * d[`y${i + 1}`] - d[`x${i + 1}`] * d[`y${i}`];
    } else if (i === n.length) {
      result += d[`x${i}`] * d[`y${1}`] - d[`x${1}`] * d[`y${i}`];
    } else {
      console.error("Something went wrong in polyArea()");
    }
  }
  fresult = Math.abs(0.5 * result);
  handelar.record(
    fresult,
    { first_point, second_point, third_point, fourth_point },
    "polyArea"
  );
  return handelar.mood(fresult);
}

module.exports = multiAngleArea;
