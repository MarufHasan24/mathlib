/*
Title : Simple
Author : Maruf Hasan
Description : simple and short converts
Date : 5 October , 2021
*/

//dependencies
const handelar = require("./../../.localhandelar");
//main functions to export

//1_@inch to centimeter
function in2Cm(inch) {
  let result;
  let num = typeof inch === "number" ? inch : false;
  if (num !== false) {
    result = num * 2.54;
    handelar.record(result, inch, "in2Cm");
    return handelar.mood(result);
  } else {
    handelar.error("a number", "inch", "in2Cm");
  }
}

//2_@Centimeter to Inch
function cm2In(centimeter) {
  let result;
  let num = typeof centimeter === "number" ? centimeter : false;
  if (num !== false) {
    result = num / 2.54;
    handelar.record(result, centimeter, "cm2In");
    return handelar.mood(result);
  } else {
    handelar.error("a number", "centimeter", "cm2In");
  }
}

//3_@Mile to kilometer
function mile2Km(mile) {
  let result;
  let num = typeof mile === "number" ? mile : false;
  if (num !== false) {
    result = num * 1.609344;
    handelar.record(result, mile, "mile2Km");
    return handelar.mood(result);
  } else {
    handelar.error("a number", "mile", "mile2Km");
  }
}

//4_@kilometer to mile
function km2Mile(kilometer) {
  let result;
  let num = typeof kilometer === "number" ? kilometer : false;
  if (num !== false) {
    result = num / 1.609344;
    handelar.record(result, kilometer, "km2Mile");
    return handelar.mood(result);
  } else {
    handelar.error("a number", "kilometer", "km2Mile");
  }
}

//5_@feet to meter
function ft2M(feet) {
  let result;
  let num = typeof feet === "number" ? feet : false;
  if (num !== false) {
    result = num * 0.3048;
    handelar.record(result, feet, "ft2M");
    return handelar.mood(result);
  } else {
    handelar.error("a number", "feet", "ft2M");
  }
}

//6_@meter to feet
function m2Ft(meter) {
  let result;
  let num = typeof meter === "number" ? meter : false;
  if (num !== false) {
    result = num / 0.3048;
    handelar.record(result, meter, "m2Ft");
    return handelar.mood(result);
  } else {
    handelar.error("a number", "meter", "m2Ft");
  }
}

//export and share
module.exports = {
  ft2M,
  m2Ft,
  in2Cm,
  cm2In,
  mile2Km,
  km2Mile,
};
