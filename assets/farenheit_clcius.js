/*
Title : Fahrenheit to Celcius
Author : Maruf Hasan
Description :
Date : , 2021
*/

//dependencies
const handelar = require("./../.localhandelar.js");

//main function to export
function fr2c(farenheit) {
  let result;
  let num = typeof farenheit === "number" ? farenheit : false;
  if (num !== false) {
    result = (5 / 9) * (num - 32);
    return handelar.record(result, farenheit, "fr2C");
  } else {
    handelar.error("a number", "farenheit", "fr2C");
  }
}

function c2fr(celcius) {
  let result;
  let num = typeof celcius === "number" ? celcius : false;
  if (num) {
    result = (9 / 5) * num + 32;
    return handelar.record(result, celcius, "fr2C");
  } else {
    handelar.error("a number", "celcius", "fr2C");
  }
}
//export and share
module.exports = {
  fr2c,
  c2fr,
};
