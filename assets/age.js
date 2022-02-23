/*
Title : Age
Author : Maruf Hasan
Description : calculate the age or gap of 2 times.
Date : 4 October, 2021
*/

// dependencies
const handelar = require("../.localhandelar");
const leapYear = require("./others/leapyear.js");

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
          handelar.error("a number", "date of customDate[" + i + "]", "age");
        } else if (i === 1) {
          handelar.error("a number", "month of customDate[" + i + "]", "age");
        } else if (i === 2) {
          handelar.error("a number", "year of customDate[" + i + "]", "age");
        } else {
          console.error("somthing went wrong in age");
        }
      }
    });
    if (
      checkDateValidity(...newDate)[0] &&
      checkDateValidity(...CustomDate)[0]
    ) {
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
        result = calculation(
          d1,
          d2,
          checkDateValidity(...newDate)[1],
          checkDateValidity(...CustomDate)[1]
        );
        result.time = "past";
      } else if (
        Number.parseInt(newDateString) > Number.parseInt(CustomDateString)
      ) {
        d1 = [...CustomDate];
        d2 = [...newDate];
        result = calculation(
          d1,
          d2,
          checkDateValidity(...CustomDate)[1],
          checkDateValidity(...newDate)[1]
        );
        result.time = "future";
        // future
      } else {
        console.error("Wrong input in Date parameter of age");
      }
      return result;
    } else {
      if (!checkDateValidity(...newDate)[0]) {
        console.error("Wrong input in Date parameter of age");
      } else if (!checkDateValidity(...CustomDate)[0]) {
        console.error("Wrong input in customDate parameter of age");
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

function checkDateValidity(date, month, year) {
  if (month >= 1 && month <= 12) {
    if (
      month === 1 ||
      month === 3 ||
      month === 5 ||
      month === 7 ||
      month === 8 ||
      month === 10 ||
      month === 12
    ) {
      if (date >= 1 && date <= 31) {
        return [true, 31];
      } else {
        handelar.error(
          `number between (1 to 31) because it's ${month}th month of the year`,
          "date",
          "age()",
          RangeError
        );
        return false;
      }
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
      if (date >= 1 && date <= 30) {
        return [true, 30];
      } else {
        handelar.error(
          `number between (1 to 30) because it's ${month}th month of the year`,
          "date",
          "age()",
          RangeError
        );
        return false;
      }
    } else if (month === 2) {
      if (leapYear(year)) {
        if (date >= 1 && date <= 29) {
          return [true, 29];
        } else {
          handelar.error(
            `number between (1 to 29) because it's February and leapyear also`,
            "date",
            "age()",
            RangeError
          );
          return false;
        }
      } else {
        if (date >= 1 && date <= 28) {
          return [true, 28];
        } else {
          handelar.error(
            `number between (1 to 28) because it's February`,
            "date",
            "age()",
            RangeError
          );
          return false;
        }
      }
    } else {
      handelar.error(`number between (1 to 31)`, "date", "age()", RangeError);
      return false;
    }
  } else {
    handelar.error("number between (1 to 12)", "month", "age()", RangeError);
    return false;
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
  return { newDateString, CustomDateString };
}

function calculation(d1, d2, ml1, ml2) {
  let result = {};
  if (d1[0] > d2[0]) {
    result.day = d2[0] + ml1 - d1[0];
    if (d1[1] + 1 > d2[1]) {
      result.month = d2[1] + 12 - (d1[1] + 1);
      result.year = d2[2] - (d1[2] + 1);
    } else {
      result.month = d2[1] - d1[1];
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
  return result;
}

//export and share
module.exports = age;
