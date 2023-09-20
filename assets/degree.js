/*
Title : degree.js
Author : Maruf Hasan
Description : convert degree into decimal and decimal into deg.
Date : 24 October , 2021
*/

//dependencies
const handelar = require("./../.localhandelar.js");

//main functions to export
function deg2Dcm(input = [0, 0, 0]) {
  let result;
  let inp = typeof input === "string" || Array.isArray(input) ? input : false;
  if (inp !== false) {
    if (Array.isArray(input)) {
      if (!inp.length) {
        inp = [0, 0, 0];
      } else if (inp.length === 1) {
        inp[1] = 0;
        inp[2] = 0;
      } else if (inp.length === 2) {
        inp[2] = 0;
      } else {
        inp = inp;
      }
      result = deg2DcmLocal(inp);
    } else if (typeof input === "string") {
      let regXpDeg = /(\d(°))/gi,
        regXpMin = /\d(\')/gi,
        regXpSec = /\d(\")/gi,
        deg,
        min,
        sec,
        linp,
        data;
      data = [
        parseFloat(inp.substring(0, inp.search(regXpDeg) + 1)),
        parseFloat(
          inp.substring(inp.search(regXpDeg) + 2, inp.search(regXpMin) + 1)
        ),
        parseFloat(
          inp.substring(inp.search(regXpMin) + 2, inp.search(regXpSec) + 1)
        ),
      ];
      (deg =
        typeof data[0] === "number" && !Number.isNaN(data[0])
          ? data[0]
          : false),
        (min =
          typeof data[1] === "number" && !Number.isNaN(data[1])
            ? data[1]
            : false),
        (sec =
          typeof data[2] === "number" && !Number.isNaN(data[2])
            ? data[2]
            : false);
      if (deg !== false && min !== false && sec !== false) {
        if (regXpDeg.test(inp) && regXpMin.test(inp) && regXpSec.test(inp)) {
          linp = [deg, min, sec];
          result = deg2DcmLocal(linp);
        } else if (
          inp.search(regXpDeg) >= 0 &&
          inp.search(regXpMin) >= 0 &&
          !regXpSec.test(inp)
        ) {
          deg = parseFloat(inp.substring(0, inp.search(regXpDeg) + 1));
          min = parseFloat(
            inp.substring(inp.search(regXpDeg) + 2, inp.search(regXpMin) + 1)
          );
          linp = [deg, min, 0];
          result = deg2DcmLocal(linp);
        } else if (
          inp.search(regXpDeg) >= 0 &&
          inp.search(regXpMin) < 0 &&
          !regXpSec.test(inp)
        ) {
          deg = parseFloat(inp.substring(0, inp.search(regXpDeg) + 1));
          linp = [deg, 0, 0];
          result = deg2DcmLocal(linp);
        } else {
          throw "Enter at least a number and symbols like °,',\"";
        }
      } else {
        throw "somthing went wrong in deg2Dcm() inpput. please enter a valid srting here";
      }
    } else {
      handelar.error(
        "an array containing 3 numbers or a string which contains °,' or \"",
        "input",
        "deg2Dcm"
      );
    }
  } else {
    handelar.error(
      "a number or a string which contains °,' or \"",
      "input",
      "deg2Dcm"
    );
  }
  return handelar.record(result, input, "deg2Dcm");
}
function dcm2Deg(number) {
  let num = typeof number === "number" ? number : false;
  if (num !== false) {
    let deg, min, sec;
    deg = Math.ceil(num) - 1;
    min = Math.ceil((num - deg) * 60) - 1;
    sec = ((num - deg) * 60 - min) * 60;
    if (sec >= 60) {
      sec = 0;
      min++;
    }
    if (min >= 60) {
      min = 0;
      deg++;
    }
    return handelar.record(
      {
        result: [deg, min, sec],
        string: `${deg}°${min}'${sec}"`,
      },
      number,
      "dcm2Deg"
    );
  } else {
    handelar.error("a number", "number", "dcm2Deg");
  }
}
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
  return handelar.record(result, input, "rad2Deg");
}
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
  return handelar.record(result, radian, "deg2Rad");
}

//local functions to use
function deg2DcmLocal(array) {
  let data = Array.isArray(array) ? array : [0, 0, 0];
  let deg = data[0],
    min = data[1],
    sec = data[2];
  let result;
  result = deg + min / 60 + sec / 3600;
  return handelar.record(result);
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
  return handelar.record({
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
  return handelar.record(result);
}

//export and share
module.exports = {
  deg2Dcm,
  dcm2Deg,
  deg2Rad,
  rad2Deg,
};
