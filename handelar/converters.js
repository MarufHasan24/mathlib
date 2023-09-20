/*
Title : convertar
Author : Maruf Hasan
Description : convert one unit to other units
Date : 5 October , 2021
tempData : require('./../assets/conversations');
*/

//module scaffolding
let handelarX = {};

//dependencies
const handelar = require("./../.localhandelar");
const converters = require("./../assets/simple");
handelarX = {
  ...converters,
  ...require("./../assets/degree"),
  ...require("./../assets/farenheit_clcius"),
};

handelarX.caller = function caller(string) {
  let result;
  let string1 =
    typeof string === "string" && string.trim().length > 0
      ? string
      : handelar.error("a string", "string", "caller");
  let inch = /^\d+(inch)$/gi,
    cm = /^\d+(cm)$/gi,
    m = /^\d+(m)$/gi,
    km = /^\d+(km)$/gi,
    mile = /^\d+(mile)$/gi,
    ft = /^\d+(ft)$/gi,
    num;

  if (inch.test(string1)) {
    num = parseFloat(string1.replace("inch", ""));
    result = converters.in2Cm(num);
  } else if (cm.test(string1)) {
    num = parseFloat(string1.replace("cm", ""));
    result = converters.cm2In(num);
  } else if (km.test(string1)) {
    num = parseFloat(string1.replace("km", ""));
    result = converters.km2Mile(num);
  } else if (mile.test(string1)) {
    num = parseFloat(string1.replace("mile", ""));
    result = converters.mile2Km(num);
  } else if (m.test(string1)) {
    num = parseFloat(string1.replace("m", ""));
    result = converters.m2Ft(num);
  } else if (ft.test(string1)) {
    num = parseFloat(string1.replace("ft", ""));
    result = converters.ft2M(num);
  } else {
    if (
      inch.test(string1) &&
      cm.test(string1) &&
      km.test(string1) &&
      mile.test(string1) &&
      m.test(string1) &&
      ft.test(string1)
    ) {
      handelar.error(
        "a number before the unit",
        "string",
        "caller",
        RangeError
      );
    } else {
      throw ReferenceError(`Enter a valid and accessable unit. List of accessable units are :
      1. m (meter)
      2. ft (Feet)
      3. km (kilometer)
      4. mile (mile)
      5. inch (inch)
      6. cm (centimeter)`);
    }
  }
  return handelar.record(result, string, "caller");
  return handelar.mood(result);
};
//export and share
module.exports = handelarX;
