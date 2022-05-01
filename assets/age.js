/*
Title : Age
Author : Maruf Hasan
Description : calculate the age or gap of 2 times.
Date : 4 October, 2021
*/

// dependencies
const handelar = require("../.localhandelar");
const checkDateValidity = require("./../.mathlibLocal/checkDateValidity");

// main function to export
function age(date, month, year, customDate = []) {
  let newDate,
    result = {};
  const today = new Date();
  let DATE = typeof date === "number" ? date : false;
  let MONTH = typeof month === "number" ? month : false;
  let YEAR = typeof year === "number" ? year : false;
  let CustomDate =
    Array.isArray(customDate) && customDate.length === 3
      ? customDate
      : [today.getDate(), today.getMonth() + 1, today.getFullYear()];
  if (DATE !== false && MONTH !== false && YEAR !== false) {
    newDate = [DATE, MONTH, YEAR];
    CustomDate.forEach((e, i, a) => {
      if (typeof e === "number" && e !== NaN) {
        a[i] = e;
      } else {
        if (i === 0) {
          handelar.error("a number", `date of customDate[${i}]`, "age");
        } else if (i === 1) {
          handelar.error("a number", `month of customDate[${i}]`, "age");
        } else if (i === 2) {
          handelar.error("a number", `year of customDate[${i}]`, "age");
        } else {
          console.error("somthing went wrong in age");
        }
      }
    });
    let validNewDate = checkDateValidity(...newDate);
    let validCustomDate = checkDateValidity(...CustomDate);
    if (validNewDate[0] && validCustomDate[0]) {
      let { newDateString, CustomDateString } = stringifyDate(
        newDate,
        CustomDate
      );
      let d1 = [],
        d2 = [];
      if (Number.parseInt(newDateString) <= Number.parseInt(CustomDateString)) {
        // past and present
        d1 = [...newDate];
        d2 = [...CustomDate];
        result = calculation(d1, d2, validNewDate[1], validCustomDate[1]);
        result.time = "past";
      } else if (
        Number.parseInt(newDateString) > Number.parseInt(CustomDateString)
      ) {
        d1 = [...CustomDate];
        d2 = [...newDate];
        result = calculation(d1, d2, validCustomDate[1], validNewDate[1]);
        result.time = "future";
        // future
      } else {
        console.error("Wrong input in Date parameter of age");
      }
      handelar.record(result, [date, month, year, customDate], "age");
      return handelar.mood(result);
    } else {
      if (!validNewDate[0]) {
        handelar.error(validNewDate[1], validNewDate[2], "age", RangeError);
      } else if (!validCustomDate[0]) {
        handelar.error(
          validCustomDate[1],
          validCustomDate[2],
          "age",
          RangeError
        );
      } else {
        console.error("somthing went wrong in age");
      }
    }
  } else {
    if (DATE === false) {
      handelar.error("a number", "date", "age");
    } else if (MONTH === false) {
      handelar.error("a number", "month", "age");
    } else if (YEAR === false) {
      handelar.error("a number", "year", "age");
    } else {
      console.error("somthing went wrong in age()");
    }
  }
}

function stringifyDate(newDate, CustomDate) {
  let newDateStringMonth = newDate[1] <= 9 ? `0${newDate[1]}` : `${newDate[1]}`;
  let newDateStringDate = newDate[0] <= 9 ? `0${newDate[0]}` : `${newDate[0]}`;
  let newDateString = `${newDate[2]}${newDateStringMonth}${newDateStringDate}`;
  let CustomDateStringMonth =
    CustomDate[1] <= 9 ? `0${CustomDate[1]}` : `${CustomDate[1]}`;
  let CustomDateStringDate =
    CustomDate[0] <= 9 ? `0${CustomDate[0]}` : `${CustomDate[0]}`;
  let CustomDateString = `${CustomDate[2]}${CustomDateStringMonth}${CustomDateStringDate}`;
  return handelar.mood({ newDateString, CustomDateString });
}

function calculation(d1, d2, ml1, ml2) {
  let result = {};
  if (d1[0] > d2[0]) {
    result.day = d2[0] + ml1 - d1[0];
    if (d1[1] + 1 > d2[1]) {
      result.month = d2[1] + 12 - (d1[1] + 1);
      result.year = d2[2] - (d1[2] + 1);
    } else {
      result.month = d2[1] - (d1[1] + 1);
      result.year = d2[2] - d1[2];
      //normal
    }
  } else {
    result.day = d2[0] - d1[0];
    if (d1[1] > d2[1]) {
      result.month = d2[1] + 12 - d1[1];
      result.year = d2[2] - (d1[2] + 1);
    } else {
      result.month = d2[1] - d1[1];
      result.year = d2[2] - d1[2];
      //normal
    }
    //normal
  }
  return handelar.mood(result);
}

//export and share
module.exports = age;
