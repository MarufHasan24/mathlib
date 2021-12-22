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
function age(year, month, date, customDate = null) {
  let newDate,
    cstDate = customDate;
  if (customDate !== null) {
    cstDate =
      typeof customDate === "object" && customDate.length === 3
        ? customDate
        : handelar.error(
            "an Array like [yyyy,mm,dd]",
            "customDate",
            "age()",
            RangeError
          );
  }
  if (!cstDate) {
    newDate = new Date();
  } else {
    newDate = new Date(...cstDate);
  }
  let dRes, mRes, yRes, dM, dFeb;
  let d = typeof date === "number" ? date : NaN;
  let m = typeof month === "number" ? month - 1 : NaN;
  let y = typeof year === "number" ? year : NaN;
  if (leapYear(y)) {
    dFeb = 29;
  } else {
    dFeb = 28;
  }
  if (
    m === 0 ||
    m === 2 ||
    m === 4 ||
    m === 6 ||
    m === 7 ||
    m === 9 ||
    m === 11
  ) {
    dM = 31;
  } else if (m === 1) {
    dM = dFeb;
  } else {
    dM = 30;
  }
  if (d && m && y) {
    if (m <= newDate.getMonth() && m >= 0) {
      yRes = newDate.getFullYear() - y;
      if (d <= newDate.getDate() && d >= 1) {
        mRes = newDate.getMonth() - m;
        dRes = newDate.getDate() - d;
      } else if (d > newDate.getDate() && d <= dM) {
        mRes = newDate.getMonth() - (m + 1);
        dRes = dM + (newDate.getDate() - d);
      } else {
        handelar.error("u", "year", "age()", RangeError);
      }
    } else if (m > newDate.getMonth() && m <= 11) {
      yRes = newDate.getFullYear() - (y + 1);
      if (d <= newDate.getDate() && d >= 1) {
        mRes = 12 + newDate.getMonth() - m;
        dRes = newDate.getDate() - d;
      } else if (d > newDate.getDate() && d <= dM) {
        mRes = 12 + newDate.getMonth() - (m + 1);
        dRes = dM + (newDate.getDate() - d);
      } else {
        handelar.error("a valid date", "date", "age()", RangeError);
      }
    } else {
      handelar.error("a month's number[1 - 12]", "month", "age()", RangeError);
    }
    if (yRes < 0) {
      handelar.error("a valid year", "year", "age()", RangeError);
    } else {
      const result = { day: dRes, month: mRes, year: yRes };
      handelar.record(result, { year, month, date, customDate }, "age");
      return result;
    }
  } else {
    if (!d) {
      handelar.error("a number", "date", "age()", RangeError);
    } else if (!m) {
      handelar.error("a number", "month", "age()", RangeError);
    } else {
      handelar.error("a number", "year", "age()", RangeError);
    }
  }
}

//export and share
module.exports = age;
