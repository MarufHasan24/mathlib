/*
Title : restoreTrush
Author : Maruf Hasan
Description : restore files from trush
Date : 3 March, 2022
*/

// dependencies
const handelar = require("../.localhandelar.js");
const fs = require("fs");
const checkDateValidity = require("../.workplace/checkDateValidity");

function restore(date = null, month = null, year = null) {
  let Date = date === null || typeof date === "number" ? date : false;
  let Month = month === null || typeof month === "number" ? month : false;
  let Year = year === null || typeof year === "number" ? year : false;
  if (Date !== false && Month !== false && Year !== false) {
    if (checkDateValidity(Date, Month, Year)[0]) {
      let fileName = `${Year}-${Month}-${Date}`;
      let folder = fs.readdirSync(`${__dirname}/../.record/.trush`);
      if (folder.indexOf(`${fileName}.json`) >= 0) {
        let result = fs.renameSync(
          `${__dirname}/../.record/.trush/${fileName}.json`,
          `${__dirname}/../.record/.restored/${fileName}.json`
        );
        return result;
      } else {
        console.error("File not found!");
        return "file not found";
      }
    } else {
      console.error("date, month or year is not valid");
    }
  } else {
    if (Date === false) {
      handelar.error("a number", "date", "record");
    } else if (Month === false) {
      handelar.error("a number", "month", "record");
    } else if (Year === false) {
      handelar.error("a number", "year", "record");
    } else {
      console.error("date, month or year is not valid");
    }
  }
}

module.exports = restore;
