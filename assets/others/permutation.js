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
  let _n = typeof n === "number" && n > 0 ? n : false,
    _r = typeof r === "number" && r >= 0 && r <= n ? r : false;
  if (_n !== false && _r !== false) {
    let result = fact(_n) / fact(_n - _r);
    handelar.record(result, { n, r }, "permut");
    return handelar.mood(result);
  } else {
    if (_n === false) {
      handelar.error("a valid number", "n", "permut");
    } else if (_r === false) {
      handelar.error("a valid number", "r", "permut");
    } else {
      console.error("Somthing went wrong in permut()");
    }
  }
}

//export and share
module.exports = permut;
