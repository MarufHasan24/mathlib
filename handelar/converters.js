/*
Title : convertar
Author : Maruf Hasan
Description : convert one unit to other units
Date : 5 October , 2021
tempData : require('./../assets/conversations');
*/

//module scaffolding
let handelar = {};

//dependencies
handelar = {
  ...require("./../assets/conversations/simple.js"),
  ...require("./../assets/conversations/degree_radian.js"),
  ...require("./../assets/conversations/degree_decimal.js"),
};
handelar.fr2C =
  require("./../assets/conversations/farenheit_clcius.js").Farenheit_2_Celcius;
handelar.c2Fr =
  require("./../assets/conversations/farenheit_clcius.js").Celcius_2_Farenheit;
handelar.caller = require("./../assets/conversations/converterCaller.js");
//export and share
module.exports = handelar;
