/*
Title : deleteRecord
Author : Maruf Hasan
Description : delete the record
Date : 2 March, 2022
*/

// dependencies
const fs = require("fs");
const handelar = require("./../.localhandelar");
const checkDateValidity = require("./../.mathlibLocal/checkDateValidity");
const validJSONfileName = require("./../.mathlibLocal/validJSONfileName");

// main function to export
function delRecord(date = null, month = null, year = null) {
  let Date =
    (typeof date === "number" && !Number.isNaN(date)) ||
    typeof date === "string"
      ? date
      : false;
  let Month =
    (typeof month === "number" && !Number.isNaN(month)) ||
    (typeof date === "string" && month === null)
      ? month
      : false;
  let Year =
    (typeof year === "number" && !Number.isNaN(year)) ||
    (typeof date === "string" && year === null)
      ? year
      : false;
  if (Date !== false && Month !== false && Year !== false) {
    let fileName,
      folder = fs.readdirSync(`${__dirname}/../.record`),
      restored = fs.readdirSync(`${__dirname}/../.record/.restored`);
    if (typeof date === "string") {
      let validJSON = validJSONfileName(Date);
      if (validJSON[0]) {
        fileName = Date.replace(".json", "");
        if (
          folder.indexOf(`${fileName}.json`) >= 0 ||
          restored.indexOf(`${fileName}.json`) >= 0
        ) {
          let exatFolder =
            folder.indexOf(`${fileName}.json`) >= 0
              ? `.record`
              : `.record/.restored`;
          fs.renameSync(
            `${__dirname}/../${exatFolder}/${fileName}.json`,
            `${__dirname}/../.record/.trush/${fileName}.json`
          );
          return handelar.mood("file deleted successfully");
        } else {
          return handelar.mood("file not found");
        }
      } else {
        if (validJSON[1] === "wrongFormate") {
          handelar.error("a valid JSON file name", "date", "delRecord");
        } else if (validJSON[1] === "dataType") {
          handelar.error(
            "a valid JSON file name as a string or a number",
            "date",
            "delRecord"
          );
        } else {
          console.error("somthing went wrong in delRecord()");
        }
      }
    } else if (typeof date === "number") {
      let validDate = checkDateValidity(Date, Month, Year);
      if (validDate[0]) {
        fileName = `${Year}-${Month}-${Date}`;
        if (
          folder.indexOf(`${fileName}.json`) >= 0 ||
          restored.indexOf(`${fileName}.json`) >= 0
        ) {
          let exatFolder =
            folder.indexOf(`${fileName}.json`) >= 0
              ? `.record`
              : `.record/.restored`;
          fs.renameSync(
            `${__dirname}/../${exatFolder}/${fileName}.json`,
            `${__dirname}/../.record/.trush/${fileName}.json`
          );
          return handelar.mood("file deleted successfully");
        } else {
          return handelar.mood("file not found");
        }
      } else {
        if (!validDate[0]) {
          handelar.error(validDate[1], validDate[2], "delRecord", RangeError);
        } else {
          console.error("somthing went wrong in delRecord()");
        }
      }
    } else {
      console.error("date, month or year is not valid");
    }
  } else {
    if (Date === false) {
      handelar.error("a number", "date", "delRecord");
    } else if (Month === false) {
      handelar.error("a number", "month", "delRecord");
    } else if (Year === false) {
      handelar.error("a number", "year", "delRecord");
    } else {
      console.error("date, month or year is not valid");
    }
  }
}

module.exports = delRecord;
