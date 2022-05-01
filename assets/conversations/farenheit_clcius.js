/*
Title : Fahrenheit to Celcius
Author : Maruf Hasan
Description :
Date : , 2021
*/

//dependencies
const handelar = require("./../../.localhandelar.js");

//main function to export
function Farenheit_2_Celcius(farenheit) {
  let result;
  let num = typeof farenheit === "number" ? farenheit : false;
  if (num !== false) {
    result = (5 / 9) * (num - 32);
    handelar.record(result, farenheit, "fr2C");
    return handelar.mood(result);
  } else {
    handelar.error("a number", "farenheit", "fr2C");
  }
}

function Celcius_2_Farenheit(celcius) {
  let result;
  let num = typeof celcius === "number" ? celcius : false;
  if (num) {
    result = (9 / 5) * num + 32;
    handelar.record(result, celcius, "fr2C");
    return handelar.mood(result);
  } else {
    handelar.error("a number", "celcius", "fr2C");
  }
}
//export and share
module.exports = {
  Farenheit_2_Celcius,
  Celcius_2_Farenheit,
};
