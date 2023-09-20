/*
Title: record.js
Author: Maruf Hasan
Description: record file
Date: 13 September, 2023
*/
// dependencies
const { existsSync, readFileSync, writeFile, rename, unlink } = require("fs");
const checkDateValidity = require("./../.mathlibLocal/checkDateValidity");
const validJSONfileName = require("./../.mathlibLocal/validJSONfileName");
const handelar = require("./../.localhandelar");

// main functions to export
function recList() {
  const restore = readdirSync(__dirname + "/../.record/.restored");
  const record = readdirSync(__dirname + "/../.record/");
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
function trushList() {
  const trush = readdirSync(__dirname + "/../.record/.trush");
  const finalArray = [];
  let jsonFinder = ".json";
  trush.forEach((e) => {
    if (e.indexOf(jsonFinder) > 0) {
      finalArray.push(e);
    }
  });
  return finalArray;
}
function delRecord(date = null, month = null, year = null, callbackf = null) {
  let Date =
    (typeof date === "number" && !Number.isNaN(date)) ||
    typeof date === "string"
      ? date
      : false;
  let callback;
  if (
    typeof month === "function" &&
    year === null &&
    callbackf === null &&
    typeof date === "string"
  ) {
    callback = month;
  } else {
    var Month =
      typeof month === "number" && !Number.isNaN(month) ? month : false;
    callback = callbackf;
  }
  let Year =
    (typeof year === "number" && !Number.isNaN(year)) ||
    (typeof date === "string" && year === null)
      ? year
      : false;
  if (
    Date !== false &&
    Month !== false &&
    Year !== false &&
    callback !== null
  ) {
    let fileName,
      folder = readdirSync(`${__dirname}/../.record`),
      restored = readdirSync(`${__dirname}/../.record/.restored`);
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
          mover(exatFolder, fileName, (result) => {
            if (result === true)
              callback({
                msg: "file deleted successfully",
                fileName: `${fileName}.json`,
                success: true,
                error: false,
              });
            else
              callback({
                msg: result,
                fileName: `${fileName}.json`,
                success: false,
                error: true,
              });
          });
        } else {
          callback({
            msg: "file not found",
            fileName: `${fileName}.json`,
            success: false,
            error: true,
          });
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
          mover(exatFolder, fileName, (result) => {
            if (result === true)
              callback({
                msg: "file deleted successfully",
                fileName: `${fileName}.json`,
                success: true,
                error: false,
              });
            else
              callback({
                msg: result,
                fileName: `${fileName}.json`,
                success: false,
                error: true,
              });
          });
          return "file deleted successfully";
        } else {
          return "file not found";
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
    } else if (callback === null) {
      handelar.error("a function", "callback", "delRecord");
    } else {
      console.error("date, month or year is not valid");
    }
  }
}
function restore(date, month = null, year = null, callbackf = null) {
  let Date =
    (typeof date === "number" && !Number.isNaN(date)) ||
    typeof date === "string"
      ? date
      : false;
  let callback;
  if (
    typeof date === "string" &&
    typeof month === "function" &&
    year === null &&
    callbackf === null
  ) {
    callback = month;
  } else {
    var Month =
      (typeof month === "number" && !Number.isNaN(month)) ||
      (typeof date === "string" && month === null)
        ? month
        : false;
    callback = callbackf;
  }
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
          local(_Date, _Month, _Year, (data) => {
            if (data)
              callback({
                msg: "file restored successfully",
                fileName: `${Year}-${Month}-${Date}.json`,
                success: true,
                error: false,
              });
            else
              callback({
                msg: "file not found",
                fileName: `${Year}-${Month}-${Date}.json`,
                success: false,
                error: true,
              });
          });
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
      local(Date, Month, Year, (data) => {
        if (data)
          callback({
            msg: "file restored successfully",
            fileName: `${Year}-${Month}-${Date}.json`,
            success: true,
            error: false,
          });
        else
          callback({
            msg: "file not found",
            fileName: `${Year}-${Month}-${Date}.json`,
            success: false,
            error: true,
          });
      });
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
function getRecord(date, month = null, year = null) {
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
    let folder = readdirSync(`${__dirname}/../.record/`);
    if (typeof date === "string") {
      let validJSON = validJSONfileName(Date);
      if (validJSON[0]) {
        return localreturn(folder, Date.replace(".json", ""));
      } else {
        if (validJSON[1] === "wrongFormate") {
          handelar.error("a valid JSON file name", "date", "getRecord");
        } else if (validJSON[1] === "dataType") {
          handelar.error(
            "a valid JSON file name as a string or a number",
            "date",
            "getRecord"
          );
        } else {
          console.error("somthing went wrong in read()");
        }
      }
    } else if (typeof date === "number") {
      let validDate = checkDateValidity(Date, Month, Year);
      if (validDate[0]) {
        let fileName = `${Year}-${Month}-${Date}`;
        let restored = readdirSync(`${__dirname}/../.record/.restored`);
        if (
          folder.indexOf(`${fileName}.json`) >= 0 ||
          restored.indexOf(`${fileName}.json`) >= 0
        ) {
          return localreturn(folder, fileName);
        } else {
          return "file not found";
        }
      } else {
        if (!validDate[0]) {
          handelar.error(validDate[1], validDate[2], "getRecord", RangeError);
        } else {
          console.error("somthing went wrong in read()");
        }
      }
    } else {
      console.error("date, month or year is not valid");
    }
  } else {
    if (Date === false) {
      handelar.error("a number", "date", "getRecord");
    } else if (Month === false) {
      handelar.error("a number", "month", "getRecord");
    } else if (Year === false) {
      handelar.error("a number", "year", "getRecord");
    } else {
      console.error("date, month or year is not valid");
    }
  }
}

//local functions to assist
function local(date, month, year, callback) {
  //return result
  let fileName = `${year}-${month}-${date}.json`;
  let folder = readdirSync(__dirname + "/../.record/.trush", "utf-8");
  let fileIsPresent = folder.find((e) => {
    if (e === fileName) {
      return true;
    } else {
      return false;
    }
  });
  if (fileIsPresent !== undefined && fileIsPresent === fileName) {
    rename(
      `${__dirname}/../.record/.trush/${fileName}`,
      `${__dirname}/../.record/.restored/${fileName}`,
      (error) => {
        if (error) callback(error);
        else callback(true);
      }
    );
  } else {
    callback(false);
  }
}
function localreturn(folder, fileName) {
  let exatFolder =
    folder.indexOf(`${fileName}.json`) >= 0 ? `.record` : `.record/.restored`;
  let fileDataAsString = readFileSync(
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
function mover(exatFolder, fileName, callback) {
  //check if file is already exist
  let p1 = `${__dirname}/../${exatFolder}/${fileName}.json`,
    p2 = `${__dirname}/../.record/.trush/${fileName}.json`;
  let a = existsSync(p2);
  if (!a) {
    rename(p1, p2, (error) => {
      if (error) callback(error);
      else callback(true);
    });
  } else {
    readFile(p1, "utf-8", (error, data) => {
      if (error) callback(error);
      else {
        readFile(p2, "utf-8", (error, data2) => {
          if (error) callback(error);
          else {
            let a = JSON.parse(data),
              b = JSON.parse(data2);
            let c = { ...a, ...b };

            writeFile(p2, JSON.stringify(c), (error) => {
              if (error) callback(error);
              else {
                unlink(p1, (error) => {
                  if (error) callback(error);
                  else callback(true);
                });
              }
            });
          }
        });
      }
    });
  }
}

module.exports = {
  recList,
  delRecord,
  restore,
  getRecord,
  trushList,
};
