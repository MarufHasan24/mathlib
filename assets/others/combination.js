/*
Title : combination.js
Author : Maruf Hasan
Description : find the combination times nCr
Date : 15 October , 2021
*/

//dependencies
const handelar = require("./../../.localhandelar.js");
const fact = require("./../factorial.js");

//main function to export
function combo(n, r) {
  let _n = typeof n === "number" ? n : NaN,
    _r = typeof r === "number" ? r : false;
  if (_n >= 0 && _r >= 0) {
    let result = fact(_n) / (fact(_n - _r) * fact(_r));
    handelar.record(result, { n, r }, "combo");
    return handelar.mood(result);
  } else {
    if (_n === false || _n < 0) {
      handelar.error("a number", "n", "combo()");
    } else {
      handelar.error("a number", "r", "combo()");
    }
  }
}
//export and share
module.exports = combo;
