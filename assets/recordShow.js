/*
Title : recordShow
Author : Maruf Hasan
Description : show the record
Date : 2 March, 2022
*/

// dependencies
const fs = require("fs");
const handelar = require("./../.localhandelar");
const checkDateValidity = require("../.workplace/checkDateValidity");

// main function to export
function record(date = null, month = null, year = null) {
  let Date = date === null || typeof date === "number" ? date : false;
  let Month = month === null || typeof month === "number" ? month : false;
  let Year = year === null || typeof year === "number" ? year : false;
  if (Date !== false && Month !== false && Year !== false) {
    if (checkDateValidity(Date, Month, Year)[0]) {
      let fileName = `${Year}-${Month}-${Date}`;
      let folder = fs.readdirSync(`${__dirname}/../.record/`);
      let restored = fs.readdirSync(`${__dirname}/../.record/.restored`);
      if (
        folder.indexOf(`${fileName}.json`) >= 0 ||
        restored.indexOf(`${fileName}.json`) >= 0
      ) {
        let exatFolder =
          folder.indexOf(`${fileName}.json`) >= 0
            ? `.record`
            : `.record/.restored`;
        let fileDataAsString = fs.readFileSync(
          `${__dirname}/../${exatFolder}/${fileName}.json`,
          "utf-8"
        );
        let fileData = JSON.parse(fileDataAsString);
        return fileData;
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

module.exports = record;
