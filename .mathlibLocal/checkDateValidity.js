/*
Title : moodchanger.js
Author : Maruf Hasan
Description : change the mood of calculation.
Date : 22 November , 2021
*/

// dependencies
const leapYear = require("../assets/others/leapyear.js");

// main function to export
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
        return [false, `number between (1 to 31)`, "date"];
      }
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
      if (date >= 1 && date <= 30) {
        return [true, 30];
      } else {
        return [false, `number between (1 to 30)`, "date"];
      }
    } else if (month === 2) {
      if (leapYear(year)) {
        if (date >= 1 && date <= 29) {
          return [true, 29];
        } else {
          return [
            false,
            `number between (1 to 29) because it's February and leapyear also`,
            "date",
          ];
        }
      } else {
        if (date >= 1 && date <= 28) {
          return [true, 28];
        } else {
          return [
            false,
            `number between (1 to 28) because it's February`,
            "date",
          ];
        }
      }
    } else {
      return [false, `number between (1 to 31)`, "date"];
    }
  } else {
    return [false, "number between (1 to 12)", "month"];
  }
}

module.exports = checkDateValidity;
