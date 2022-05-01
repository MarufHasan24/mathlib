/*
Title: restoreFromTrush
Author: Maruf Hasan
Description: restore file frfom trush
Date: 26 April, 2022
*/

// dependencies
const handelar = require("../.localhandelar.js");
const fs = require("fs");
const checkDateValidity = require("../.mathlibLocal/checkDateValidity");
const validJSONfileName = require("../.mathlibLocal/validJSONfileName");

// main function to export
function main(date, month = null, year = null) {
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
    if (typeof Date === "string") {
      let validJSON = validJSONfileName(Date);
      let fileName = Date.replace(".json", "");
      let fileNameArray =
        fileName.split("-").length === 3 ? fileName.split("-") : false;
      if (fileNameArray && validJSON[0]) {
        let _Date = parseInt(fileNameArray[2]),
          _Month = parseInt(fileNameArray[1]),
          _Year = parseInt(fileNameArray[0]);
        let validDate = checkDateValidity(_Date, _Month, _Year);
        if (validDate[0]) {
          return handelar.mood(local(_Date, _Month, _Year));
        } else {
          //date is not valid
          if (!validDate[0]) {
            handelar.error(validDate[1], validDate[2], "restore", RangeError);
          } else {
            console.error("somthing went wrong in restore()");
          }
        }
      } else {
        //json file is not valid
        if (validJSON[1] === "wrongFormate") {
          handelar.error("a valid JSON file name", "date", "restore");
        } else if (validJSON[1] === "dataType") {
          handelar.error(
            "a valid JSON file name as a string or a number",
            "date",
            "restore"
          );
        } else {
          console.error("somthing went wrong in restore()");
        }
      }
    } else if (typeof Date === "number") {
      //all should present
      return handelar.mood(local(Date, Month, Year));
    } else {
      //param error
      if (Date === false) {
        handelar.error("a number", "date", "restore");
      } else if (Month === false) {
        handelar.error("a number", "month", "restore");
      } else if (Year === false) {
        handelar.error("a number", "year", "restore");
      } else {
        console.error("date, month or year is not valid");
      }
    }
  } else {
    //param error
    if (Date === false) {
      handelar.error("a number", "date", "restore");
    } else if (Month === false) {
      handelar.error("a number", "month", "restore");
    } else if (Year === false) {
      handelar.error("a number", "year", "restore");
    } else {
      console.error("date, month or year is not valid");
    }
  }
}

function local(date, month, year) {
  //return result
  let fileName = `${year}-${month}-${date}.json`;
  let folder = fs.readdirSync(__dirname + "/../.record/.trush", "utf-8");
  let fileIsPresent = folder.find((e) => {
    if (e === fileName) {
      return true;
    } else {
      return false;
    }
  });
  if (fileIsPresent !== undefined && fileIsPresent === fileName) {
    fs.renameSync(
      `${__dirname}/../.record/.trush/${fileName}`,
      `${__dirname}/../.record/.restored/${fileName}`,
      (error) => {
        if (error) console.error(error);
      }
    );
    return handelar.mood("file restored sussecfully");
  } else {
    //file is missing
    return handelar.mood("file not found");
  }
}

function proxy(date, month = null, year = null) {
  return main(date, month, year);
}
// console.log(proxy(24, 4, 2022));
//export and share
module.exports = proxy;
