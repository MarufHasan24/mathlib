/*
Title : dememo.js
Author : Maruf Hasan
Description : return data to user
Date : 4 October, 2021
*/

// dependencies
const fs = require("fs");
const handelar = require("./../.localhandelar.js");

//main function to expot
function delMemo(name = "ALL", asynchronous = false, callback) {
  let nam = typeof name === "string" ? name : false;
  let asy = typeof asynchronous === "boolean" ? asynchronous : false;
  if (nam !== false) {
    if (asy) {
      delMemoLocal(nam, asy, (call) => {
        callback(call);
      });
    } else {
      return delMemoLocal(nam, asy);
    }
  } else {
    if (nam === false) {
      handelar.error("a string", "name", "delMemo");
    } else {
      console.error("Somthing went wrong in delMemo()");
    }
  }
}

function delMemoLocal(name1, asynchronous1, callback) {
  if (!asynchronous1) {
    try {
      let data = fs.readFileSync(`${__dirname}/../.mathLib/user.json`, "utf8");
      let output = JSON.parse(data);
      let keyArr = Object.keys(output);
      if (keyArr.indexOf(name1) >= 0) {
        delete output[name1];
        fs.writeFileSync(
          `${__dirname}/../.mathLib/user.json`,
          JSON.stringify(output)
        );
        return "done";
      } else if (name1 === "ALL") {
        output = {};
        fs.writeFileSync(
          `${__dirname}/../.mathLib/user.json`,
          JSON.stringify(output)
        );
        return "all clear";
      } else {
        throw ReferenceError(`${name1} can't found in local databage.`);
      }
    } catch (e) {
      throw e;
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
            delete output[name1];
            fs.writeFile(
              `${__dirname}/../.mathLib/user.json`,
              JSON.stringify(output),
              (error2) => {
                if (!error2) {
                  callback("success");
                } else {
                  throw error2;
                }
              }
            );
          } else if (name1 === "ALL") {
            output = {};
            fs.writeFile(
              `${__dirname}/../.mathLib/user.json`,
              JSON.stringify(output),
              (error3) => {
                if (!error3) {
                  callback("all clear");
                } else {
                  throw error3;
                }
              }
            );
          } else {
            throw ReferenceError(`${name1} isn't in local databage.`);
          }
        } else {
          throw error1;
        }
      }
    );
  }
}

module.exports = delMemo;
