/*
Title : recordShow
Author : Maruf Hasan
Description : show the record
Date : 2 March, 2022
*/

// dependencies
const fs = require("fs");
const handelar = require("./../.localhandelar");
const checkDateValidity = require("../.mathlibLocal/checkDateValidity");
const validJSONfileName = require("../.mathlibLocal/validJSONfileName");

// main function to export
function read(date, month = null, year = null) {
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
    let folder = fs.readdirSync(`${__dirname}/../.record/`);
    if (typeof date === "string") {
      let validJSON = validJSONfileName(Date);
      if (validJSON[0]) {
        return localreturn(folder, Date.replace(".json", ""));
      } else {
        if (validJSON[1] === "wrongFormate") {
          handelar.error("a valid JSON file name", "date", "read");
        } else if (validJSON[1] === "dataType") {
          handelar.error(
            "a valid JSON file name as a string or a number",
            "date",
            "read"
          );
        } else {
          console.error("somthing went wrong in read()");
        }
      }
    } else if (typeof date === "number") {
      let validDate = checkDateValidity(Date, Month, Year);
      if (validDate[0]) {
        let fileName = `${Year}-${Month}-${Date}`;
        let restored = fs.readdirSync(`${__dirname}/../.record/.restored`);
        if (
          folder.indexOf(`${fileName}.json`) >= 0 ||
          restored.indexOf(`${fileName}.json`) >= 0
        ) {
          return localreturn(folder, fileName);
        } else {
          return handelar.mood("file not found");
        }
      } else {
        if (!validDate[0]) {
          handelar.error(validDate[1], validDate[2], "read", RangeError);
        } else {
          console.error("somthing went wrong in read()");
        }
      }
    } else {
      console.error("date, month or year is not valid");
    }
  } else {
    if (Date === false) {
      handelar.error("a number", "date", "read");
    } else if (Month === false) {
      handelar.error("a number", "month", "read");
    } else if (Year === false) {
      handelar.error("a number", "year", "read");
    } else {
      console.error("date, month or year is not valid");
    }
  }
}

function localreturn(folder, fileName) {
  let exatFolder =
    folder.indexOf(`${fileName}.json`) >= 0 ? `.record` : `.record/.restored`;
  let fileDataAsString = fs.readFileSync(
    `${__dirname}/../${exatFolder}/${fileName}.json`,
    "utf-8"
  );
  let fileData;
  try {
    fileData = JSON.parse(fileDataAsString);
  } catch (e) {
    let err = new Error("Data is corrupted.");
    throw err;
  }
  return fileData;
}

// export and share
module.exports = read;
