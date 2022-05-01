/*
Title : degree_radian.js
Author : Maruf Hasan
Description : convert degree into radian and convert  radian into degree
Date : 7 October , 2021
*/

//dependencies
const handelar = require("./../../.localhandelar.js");

//main functions to export

//convert degree into radian
function deg2Rad(input = [0, 0, 0]) {
  let result;
  if (Array.isArray(input)) {
    //array
    let deg = input.length && typeof input[0] === "number" ? input[0] : 0,
      min = input.length >= 2 && typeof input[1] === "number" ? input[1] : 0,
      sec = input.length === 3 && typeof input[2] === "number" ? input[2] : 0;
    if (deg !== false && min !== false && sec !== false) {
      result = localDeg([deg, min, sec]);
    } else {
      if (deg === NaN) {
        handelar.error("a number", "input", "deg2Rad");
      } else if (min === NaN) {
        handelar.error("a number", "input", "deg2Rad");
      } else if (sec === NaN) {
        handelar.error("a number", "input", "deg2Rad");
      } else {
        console.error("somthing went wrong in deg2Rad");
      }
    }
  } else if (typeof input === "string") {
    let regXpDeg = /(°){1}/gi,
      regXpMin = /(′|'|`){1}/gi;
    regXpSec = /(″|"|”|“){1}/gi;
    if (input.search(regXpDeg) >= 0) {
      let deg = parseFloat(input.substring(0, input.search(regXpDeg))),
        min =
          input.search(regXpMin) >= 0
            ? parseFloat(
                input.substring(
                  input.search(regXpDeg) + 1,
                  input.search(regXpMin)
                )
              )
            : 0,
        sec =
          input.search(regXpSec) >= 0
            ? parseFloat(
                input.substring(
                  input.search(regXpMin) + 1,
                  input.search(regXpSec)
                )
              )
            : 0;
      result = localDeg([deg, min, sec]);
    } else {
      handelar.error("a string including °,',\"", "input", "deg2Rad");
    }
  } else if (typeof input === "number") {
    result = localDeg([input, 0, 0]);
  } else {
    handelar.error(
      "an Array contains 3 numbers or a string",
      "input",
      "deg2Rad"
    );
  }
  handelar.record(result, input, "rad2Deg");
  return handelar.mood(result);
}

//convert radian into degree
function rad2Deg(radian) {
  let rad,
    result,
    deg,
    regXp = /(π$){1}/gi,
    be4deg,
    regXp2 = /(π\/){1}/gi;
  if (typeof radian === "number") {
    rad = radian;
    deg = rad * (180 / Math.PI);
    min = Number.isInteger(deg)
      ? 0
      : Math.ceil((deg - (Math.ceil(deg) - 1)) * 60) - 1;
    sec = Number.isInteger((deg - (Math.ceil(deg) - 1)) * 60)
      ? 0
      : ((deg - (Math.ceil(deg) - 1)) * 60 - min) * 60;
    result = { degree: deg, array: [Math.floor(deg), min, sec] };
  } else if (typeof radian === "string") {
    if (radian.search(regXp) >= 0) {
      rad = radian.substring(0, radian.search(regXp));
      be4deg = Number.isNaN(parseFloat(rad)) ? 1 : parseFloat(rad);
      result = localRad(be4deg);
    } else if (radian.search(regXp2) >= 0 && radian.search(/^π/gi) === -1) {
      rad = Function("return " + radian.replace(/(π){1}/gi, ""))();
      be4deg = rad % (Math.PI / 180);
      result = localRad(be4deg);
    } else if (radian.search(regXp2) >= 0 && radian.search(/^π/gi) >= 0) {
      rad = Function(`return 1${radian.replace(/(π){1}/gi, "")}`)();
      be4deg = rad % (Math.PI / 180);
      result = localRad(be4deg);
    } else {
      console.error(
        `TypeError : Please put a π symbol at the last of your string`
      );
    }
  } else {
    handelar.error("a number or a string", "radian", "rad2Deg");
  }
  handelar.record(result, radian, "deg2Rad");
  return handelar.mood(result);
}

function localRad(be4deg) {
  let deg, min, sec;
  deg = Math.ceil(be4deg * 180) - 1;
  min = Math.ceil((be4deg * 180 - deg) * 60) - 1;
  sec = ((be4deg * 180 - deg) * 60 - min) * 60;
  if (sec >= 60) {
    sec = 0;
    min++;
  }
  if (min >= 60) {
    min = 0;
    deg++;
  }
  return handelar.mood({
    array: [deg, min, sec],
    degree: deg + min / 60 + sec / 3600,
  });
}

function localDeg(array) {
  let data = Array.isArray(array) ? array : [NaN, NaN, NaN];
  let deg = data[0],
    min = data[1],
    sec = data[2];
  let result, radian, string;
  radian = (deg + min / 60 + sec / 3600) * (Math.PI / 180);
  string = `${radian / Math.PI}π`;
  result = { radian, string };
  return handelar.mood(result);
}

//export and share
module.exports = {
  deg2Rad,
  rad2Deg,
};
