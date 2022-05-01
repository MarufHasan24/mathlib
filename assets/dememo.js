/*
Title : dememo.js
Author : Maruf Hasan
Description : return data to user
Date : 4 October, 2021
*/

// dependencies
const handelar = require("../.localhandelar");

//main function to expot
function deMemo(name, asynchronous = false, callBack = null) {
  let regXp = /^[0-9]/gi;
  let nam =
    typeof name === "string" &&
    name.trim().length > 0 &&
    name.search(regXp) === -1
      ? name
      : false;
  let result;
  let asy = typeof asynchronous === "boolean" ? asynchronous : null;
  if (nam && asy !== null) {
    if (asy === true) {
      deMemoNode(nam, asy, (call) => {
        result = callBack(call);
        handelar.record(result, { name, asynchronous }, "deMemo");
      });
    } else {
      result = deMemoNode(nam, asy);
      handelar.record(result, { name, asynchronous }, "deMemo");
    }
  } else {
    handelar.error(
      "a string",
      "name",
      "deMemo()",
      TypeError,
      "And don't add any number[0-9] at the starting of the name"
    );
  }
}

function deMemoNode(name1, asynchronous1 = false, callBack = null) {
  const fs = require("fs");
  if (!asynchronous1) {
    try {
      let data = fs.readFileSync(`${__dirname}/../.mathLib/user.json`, "utf8");
      let output = JSON.parse(data);
      let keyArr = Object.keys(output);
      if (keyArr.indexOf(name1) >= 0) {
        return handelar.mood(output[name1]);
      } else {
        return handelar.mood(`not found`);
      }
    } catch (e) {
      console.log(e);
    }
  } else {
    fs.readFile(
      `${__dirname}/../.mathLib/user.json`,
      "utf8",
      (error1, data) => {
        if (!error1 && data) {
          let output = JSON.parse(data);
          let keyArr = Object.keys(output);
          if (keyArr.indexOf(name1) >= 0) {
            callBack(output[name1]);
          } else {
            callBack(`not found`);
          }
        } else {
          callBack(error1);
        }
      }
    );
  }
}

//export and share
module.exports = deMemo;
