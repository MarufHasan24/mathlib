/*
Title : converterCaller.js
Author : Maruf Hasan
Description : call the correct converter to convert the string.
Date : 14 October , 2021
*/

//dependencies
const handelar = require("./../../.localhandelar.js");
const converters = require("./simple.js");

//main function to export
function caller(string) {
  let result;
  let string1 =
    typeof string === "string" && string.trim().length > 0
      ? string
      : handelar.error("a string", "string", "caller");
  let inch = /(\dinch)$/gi,
    cm = /\d(cm)$/gi,
    m = /\d(m)$/gi,
    km = /\d(km)$/gi,
    mile = /\d(mile)$/gi,
    ft = /\d(ft)$/gi,
    num;

  if (string1.search(inch) >= 0) {
    num = parseFloat(string1.substring(0, string1.search(inch) + 1));
    result = converters.in2Cm(num);
  } else if (string1.search(cm) >= 0) {
    num = parseFloat(string1.substring(0, string1.search(cm) + 1));
    result = converters.cm2In(num);
  } else if (string1.search(km) >= 0) {
    num = parseFloat(string1.substring(0, string1.search(km) + 1));
    result = converters.km2Mile(num);
  } else if (string1.search(mile) >= 0) {
    num = parseFloat(string1.substring(0, string1.search(mile) + 1));
    result = converters.mile2Km(num);
  } else if (string1.search(m) >= 0) {
    num = parseFloat(string1.substring(0, string1.search(m) + 1));
    result = converters.m2Ft(num);
  } else if (string1.search(ft) >= 0) {
    num = parseFloat(string1.substring(0, string1.search(ft) + 1));
    result = converters.ft2M(num);
  } else {
    if (
      string1.search(ft) <= 0 ||
      string1.search(m) <= 0 ||
      string1.search(km) <= 0 ||
      string1.search(cm) <= 0 ||
      string1.search(mile) <= 0 ||
      string1.search(inch) <= 0
    ) {
      handelar.error(
        "a number before the unit",
        "string",
        "caller()",
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
  handelar.record(result, string, "caller");
  return handelar.mood(result);
}

//export and share
module.exports = caller;
