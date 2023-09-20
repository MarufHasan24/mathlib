/*
Title : index.js
Author : Maruf Hasan
Description : get together all the assets and provide them to math.js
Date : 4 October, 2021
tempData : require('./../assets/');
*/

//module scaffolding
let handelar = {};

//dependencies :
const { record, error } = require("../.localhandelar");
const checkDateValidity = require("./../.mathlibLocal/checkDateValidity");
/*---important functions---*/

//@main squad :
handelar = {
  ...require("./others"),
  ...require("./converters"),
  ...require("./measurement"),
  ...require("../assets/memory"),
  ...require("../assets/record"),
};

//@important squad :
handelar.linearEq = require("./../assets/linearEquation");
handelar.fact = function (number) {
  let result = 1;
  let num =
    typeof number === "number" && number >= 0 && Number.isInteger(number)
      ? number
      : false;
  if (num !== false) {
    if (num === 0) {
      result = result;
    } else if (num > 0) {
      for (let i = 1; i <= num; i++) {
        result *= i;
      }
    } else {
      console.error("Somthing went wrong in fact()");
    }
  } else {
    if (num === false) {
      error(
        "a valid number",
        "number",
        "fact",
        TypeError,
        "Be sure the number is an integer type positave number"
      );
    } else {
      console.error("Somthing went wrong in fact()");
    }
  }
  return record(result, number, "fact");
};
handelar.age = function (year, month, date, customDate = []) {
  let result;
  let today = new Date();
  let yr = typeof year === "number" ? year : false;
  let mn = typeof month === "number" ? month : today.getMonth() + 1;
  let dt = typeof date === "number" ? date : today.getDate();
  let cd =
    Array.isArray(customDate) && customDate
      ? customDate
      : [today.getFullYear(), mn, dt];
  if (yr !== false && mn && dt && cd !== false) {
    let n = checkDateValidity(yr, mn, dt);
    cd[0] = cd[0] ? cd[0] : today.getFullYear();
    cd[1] = cd[1] ? cd[1] : today.getMonth() + 1;
    cd[2] = cd[2] ? cd[2] : today.getDate();
    let m = checkDateValidity(cd[0], cd[1], cd[2]);
    if (n[0] && m[0]) {
      if (yr > cd[0]) {
        let t = yr;
        yr = cd[0];
        cd[0] = t;
        t = mn;
        mn = cd[1];
        cd[1] = t;
        t = dt;
        dt = cd[2];
        cd[2] = t;
      }
      if (dt > cd[2]) {
        cd[2] += n[1];
        if (mn < 12) {
          mn++;
        } else {
          mn = 1;
          yr++;
        }
      }
      if (mn > cd[1]) {
        cd[1] += 12;
        yr++;
      }
      result = [cd[0] - yr, cd[1] - mn, cd[2] - dt];
    } else {
      if (!n[0]) {
        error(n[1], n[2], "age");
      } else if (!m[0]) {
        error(m[1], m[2], "age");
      } else {
        console.error("Somthing went wrong in age()");
      }
    }
  } else {
    if (!yr) {
      error("a valid year", "year", "age");
    } else if (!mn) {
      error("a valid month between 1-12", "month", "age");
    } else if (!dt) {
      error("a valid date between 1-31", "date", "age");
    } else if (!cd) {
      error("an array containing [year, month, date]", "customDate", "age");
    } else {
      console.error("Somthing went wrong in age()");
    }
  }
  return record(result, [year, month, date, customDate], "age");
};
handelar.qudrt = function (a = 0, b = 0, c = 0) {
  let x1, x2, d;
  let aN = typeof a === "number" ? a : false;
  let bN = typeof b === "number" ? b : false;
  let cN = typeof c === "number" ? c : false;
  if (aN !== false && bN !== false && cN !== false) {
    d = bN ** 2 - 4 * aN * cN;
    if (d < 0) {
      error("some valid number", "a,b,c", "qudrt");
    } else {
      x1 = (d ** 0.5 - bN) / (2 * aN);
      x2 = (-(d ** 0.5) - bN) / (2 * aN);
      return record([x1, x2], { a, b, c }, "qudrt");
    }
  } else {
    if (aN !== false) {
      error("a number", "'a'", "qudrt");
    } else if (bN !== false) {
      error("a number", "'b'", "qudrt");
    } else if (cN !== false) {
      error("a number", "'c'", "qudrt");
    } else {
      console.error("Somthing went wrong in qudrt()");
    }
  }
};
handelar.random = function (minimum, maximum, type = null) {
  let result;
  let res;
  const max = typeof maximum === "number" ? maximum : 1;
  const min = typeof minimum === "number" ? minimum : 0;
  const typ = typeof type === "number" ? type : null;
  if (max !== null && min !== null && typ !== false) {
    res = min + Math.random() * (max - min);
    if (type === 0) {
      result = Math.floor(res);
    } else if (type === null || type >= 12) {
      result = res;
    } else {
      result = parseFloat(res.toFixed(type));
    }
    return record(result, { maximum, minimum, type }, "random");
  } else {
    if (min === false) {
      error("a number", "maximum", "random");
    } else if (max === false) {
      error("a number", "minimum", "random");
    } else {
      console.error("Somthing went wrong in rand()");
    }
  }
};
handelar.avg = function (...number) {
  var num = [],
    sum = 0;
  let result;
  for (let i = 0; i < number.length; i++) {
    num[i] = typeof number[i] === "number" ? number[i] : false;
    if (num[i] !== false) {
      sum += num[i];
    } else {
      if (num[i] === false) {
        error("a number", `${i + 1}no. number`, "average");
      } else {
        console.error("Somthing went wrong in average()");
      }
    }
  }
  result = sum / num.length;
  return record(result, { numbers: [...num] }, "avarage");
};
handelar.logx = function (base, angle) {
  let bs = typeof base === "number" && base !== 1 && base > 0 ? base : false,
    ang = typeof angle === "number" && angle > 0 ? angle : false;
  if (bs !== false && ang !== false) {
    let result = Math.log10(ang) / Math.log10(bs);
    return record(result, { base, angle }, "logx");
  } else {
    if (bs === false) {
      error("a number which is grater than 0 and not 1", "base", "logx");
    } else if (ang === false) {
      error("a number which is grater than 0", "angle", "logx");
    } else {
      console.error("Somthing went wrong in logx()");
    }
  }
};
handelar.rootx = function (base = 0, power = 1) {
  let b = typeof base === "number" ? base : NaN,
    p = typeof power === "number" ? power : false;
  if (b !== false && p !== false) {
    if (!handelar.odd(p) && base >= 0) {
      result = Math.pow(b, 1 / p);
    } else if (handelar.odd(p) && base >= 0) {
      result = Math.pow(b, 1 / p);
    } else if (handelar.odd(p) && base < 0 && p > 0) {
      b = -b;
      result = -Math.pow(b, 1 / p);
    } else if (handelar.odd(p) && p < 0 && base < 0) {
      b = -b;
      p = -p;
      result = -1 / Math.pow(b, 1 / p) - 0.0000000000000001;
    } else {
      result = NaN;
    }
  } else {
    if (b === false) {
      error("a number", "base", "rootx");
    } else if (p === false) {
      error("a number", "power", "rootx");
    } else {
      console.error("Somthing went wrong in rootx()");
    }
  }
  return record(result, { base, power }, "rootx");
};
handelar.fract = function (input) {
  let result;
  let inp = typeof input === "number" ? input : false;
  if (inp !== false) {
    if (Number.isInteger(inp)) {
      return record(inp, input, "fract");
    } else {
      return record(fractA(inp), input, "fract");
    }
  } else {
    if (inp === false) {
      error("a number", "input", "fract");
    } else {
      console.error("Somthing went wrong in fract()");
    }
  }
  return record(result, input, "fract");
};
handelar.asIntRatio = function (number, as) {
  let inp = typeof number === "number" ? number : false;
  let las = typeof as === "number" ? as : false;
  if (inp !== false && las !== false) {
    return record(
      Number.isInteger(inp / las) ? inp / las : 0,
      [number, as],
      "asIntRatio"
    );
  } else {
    if (inp === false) {
      error("a number", "number", "asIntRatio");
    } else {
      console.error("Somthing went wrong in asIntRatio()");
    }
  }
};
handelar.limit = function (tendsTo, func, accuracy = 6) {
  let tt =
    typeof tendsTo == "number" && !Number.isNaN(tendsTo) ? tendsTo : false;
  let fc = typeof func == "function" ? func : false;
  let ac =
    typeof accuracy == "number" &&
    Number.isInteger(accuracy) &&
    !Number.isNaN(accuracy) &&
    accuracy > 0 &&
    accuracy < 11
      ? accuracy
      : false;
  if (tt !== false && fc !== false && ac !== false) {
    try {
      let result = fc(0.2);
      if (typeof result == "undefined")
        error(
          "a valid function",
          "func",
          "limit",
          SyntaxError,
          "return is absent"
        );
      else if (typeof result !== "number")
        error(
          "a valid function",
          "func",
          "limit",
          SyntaxError,
          "returned value is not a number"
        );
    } catch (e) {
      error("a valid function", "func", "limit", SyntaxError);
    }
    if (tt == Infinity) {
      let de = Number.MAX_VALUE / Number.MAX_SAFE_INTEGER ** (2 * (10 - 1) + 1);
      return handler.record(func(de), [tendsTo, func, accuracy], "limit");
    } else if (tt == -Infinity) {
      let de = Number.MAX_VALUE / Number.MAX_SAFE_INTEGER ** (2 * (10 - 1) + 1);
      return handler.record(func(-de), [tendsTo, func, accuracy], "limit");
    } else {
      let result = (fc(tt - 10 ** -(ac * 4)) + fc(tt + 10 ** -(ac * 4))) / 2;
      result = Number(result.toFixed(ac));
      return handler.record(result, [tendsTo, func, accuracy], "limit");
    }
  } else {
    if (tt === false) handler.error("a valid number", "tendsTo", "limit");
    else if (fc === false) handler.error("a valid function", "func", "limit");
    else if (ac === false)
      handler.error(
        "a valid integer type number",
        "accuracy",
        "limit",
        RangeError,
        "Be sure the accuracy is between 1 to 10"
      );
    else console.error("Somthing went wrong in limit()");
  }
};
handelar.difrn = function (x, func) {
  try {
    let r = func(x);
    if (typeof r == "undefined")
      error(
        "a valid function",
        "func",
        "difrn",
        SyntaxError,
        "return is absent"
      );
    else if (typeof r !== "number")
      error(
        "a valid function",
        "func",
        "difrn",
        SyntaxError,
        "returned value is not a number"
      );
  } catch (e) {
    error("a valid function", "func", "difrn", SyntaxError);
  }
  handelar.limit(0, (h) => {
    return (func(h + x) - func(x)) / h;
  });
};

//main function to export
handelar.mathlib = require("./../clear");
handelar.Vector = require("./../assets/vector");
handelar.Matrix = require("./../assets/matrix");
/* function dependencies */
function fractA(j) {
  j = j.toString().replace(/^0+\./g, "");
  let len;
  let reg = j.match(/(\d+?)\1+$/);
  if (reg) {
    let pos = j.split(".");
    j = j.replace(reg[0], reg[1]);
    let rec = pos[0] + pos[1].replace(reg[0], "");
    j = Number(rec + reg[1]) - Number(rec);
    len = Number(
      "9".repeat(reg[1].length) + "0".repeat(rec.length - pos[0].length)
    );
  } else {
    j = j.replace(".", "");
    len = 10 ** (j.length - 1);
    j = parseInt(j);
  }
  let d = true;
  while (d) {
    if (j % 5 == 0 && len % 5 == 0) {
      j /= 5;
      len /= 5;
    } else if (j % 2 == 0 && len % 2 == 0) {
      j /= 2;
      len /= 2;
    } else if (j % 3 == 0 && len % 3 == 0) {
      j /= 3;
      len /= 3;
    } else if (j % 7 == 0 && len % 7 == 0) {
      j /= 7;
      len /= 7;
    } else {
      d = false;
    }
  }
  return [j, len];
}
//export and share
module.exports = handelar;
