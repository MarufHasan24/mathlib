/*
Title : 
Author : Maruf Hasan
Description :
Date : , 2021
*/

//dependencies
const handelar = require("./../../.localhandelar.js");
const fact = require("./../factorial.js");

//main function to export
function permut(n, r) {
  let _n = typeof n === "number" ? n : NaN,
    _r = typeof r === "number" ? r : false;
  if (_n && _r) {
    let result = fact(_n) / fact(_n - _r);
    handelar.record(result, { n, r }, "permut");
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
module.exports = permut;
