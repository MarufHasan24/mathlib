/*
Title : recordList
Author : Maruf Hasan
Description : show the record
Date : 4 March, 2022
*/

// dependencies
const fs = require("fs");
const record = fs.readdirSync(__dirname + "/../.record");
const restore = fs.readdirSync(__dirname + "/../.record/.restored");

/* main object to export */
function main() {
  const finalArray = [];
  let jsonFinder = ".json";
  record.forEach((e) => {
    if (e.indexOf(jsonFinder) > 0) {
      finalArray.push(e);
    }
  });
  restore.forEach((e) => {
    if (e.indexOf(jsonFinder) > 0) {
      finalArray.push(e);
    }
  });
  return finalArray;
}

module.exports = main();
