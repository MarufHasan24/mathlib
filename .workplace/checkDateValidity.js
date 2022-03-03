const handelar = require("../.localhandelar.js");
const leapYear = require("../assets/others/leapyear.js");

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
            "record",
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
            "record",
            RangeError
          );
          return false;
        }
      }
    } else {
      handelar.error(`number between (1 to 31)`, "date", "record", RangeError);
      return false;
    }
  } else {
    handelar.error("number between (1 to 12)", "month", "record", RangeError);
    return false;
  }
}

module.exports = checkDateValidity;
