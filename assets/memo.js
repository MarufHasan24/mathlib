/*
Title : memo.js
Author : Maruf Hasan
Description : memories data 
Date : 4 October, 2021
*/

// dependencies
const handelar = require("../.localhandelar");

let fresult;
//main function to export
function memo(number, name, asynchronous = false, callBack = null) {
  let regXp = /^[0-9]/gi;
  let num =
    typeof number === "number" || Array.isArray(number) ? number : false;
  let asy = typeof asynchronous === "boolean" ? asynchronous : false;
  let nam =
    typeof name === "string" &&
    name.trim().length > 0 &&
    name.search(regXp) === -1
      ? name
      : false;
  if (num !== false && nam !== false && asy !== null) {
    num = num;
    if (asy === false) {
      fresult = MemoNode(num, nam, asy);
      handelar.record(
        num,
        { number, type: typeof number, name, asynchronous, callBack },
        "memo"
      );
      return fresult;
    } else {
      MemoNode(num, nam, asy, (call) => {
        callBack(call);
        handelar.record(
          num,
          { number, type: typeof number, name, asynchronous, callBack },
          "memo"
        );
      });
    }
  } else {
    if (num === false) {
      handelar.error("a number on an array", "number", "memo");
    } else if (nam === false) {
      handelar.error(
        "a string",
        "name",
        "memo()",
        TypeError,
        "And don't add any number[0-9] at the starting of the name"
      );
    } else if (asy === null) {
      handelar.error("a boolean value", "asynchronous", "memo");
    } else {
      console.error("Somthing went wrong in memo()");
    }
  }
}

function MemoNode(number1, name1, asynchronous1, callBack = null) {
  let nam1 = name1;
  let num1 = number1;
  let input = {};
  const fs = require("fs");
  if (!asynchronous1) {
    try {
      callBack = null;
      let folder = fs.readdirSync(`${__dirname}/../.mathLib`);
      const data = fs.readFileSync(
        `${__dirname}/../.mathLib/user.json`,
        "utf-8"
      );
      input = { ...JSON.parse(data) };
      input[nam1] = {
        number: num1,
        type: typeof num1,
        date: new Date().toString(),
        asynch: asynchronous1,
      };
      if (folder) {
        fs.writeFileSync(
          `${__dirname}/../.mathLib/user.json`,
          JSON.stringify(input),
          { encoding: "utf-8", flag: "w+" }
        );
        return "saved";
      } else {
        fs.mkdirSync(`${__dirname}/../.mathLib`);
        fs.writeFileSync(
          `${__dirname}/../.mathLib/user.json`,
          JSON.stringify(input),
          { encoding: "utf-8", flag: "w+" }
        );
        return "saved";
      }
    } catch (e) {
      input[nam1] = {
        number: num1,
        type: typeof num1,
        date: new Date().toString(),
        asynch: asynchronous1,
      };
      try {
        fs.mkdirSync(`${__dirname}/../.mathLib`);
        fs.writeFileSync(
          `${__dirname}/../.mathLib/user.json`,
          JSON.stringify(input),
          { encoding: "utf-8", flag: "w+" }
        );
        return "saved";
      } catch (e) {
        console.log("Don't delete the user.json file from .mathLib folder!");
        if (!fs.readdirSync(`${__dirname}/../.mathLib`).length) {
          fs.writeFileSync(
            `${__dirname}/../.mathLib/user.json`,
            JSON.stringify(input),
            { encoding: "utf-8", flag: "w+" }
          );
          return "saved";
        }
      }
    }
  } else {
    //asynchronous
    fs.readdir(`${__dirname}/../.mathLib`, (error, files) => {
      if (!error && files) {
        fs.readFile(`${__dirname}/../.mathLib/user.json`, (errorM, data) => {
          if (!errorM && data.length) {
            input = { ...JSON.parse(data) };
            input[nam1] = {
              number: num1,
              type: typeof num1,
              date: new Date().toString(),
              asynch: asynchronous1,
            };
            return asyncMainMemoNode(
              fs,
              "user.json",
              JSON.stringify(input),
              callBack
            );
          } else {
            input[nam1] = {
              number: num1,
              type: typeof num1,
              date: new Date().toString(),
              asynch: asynchronous1,
            };
            return asyncMainMemoNode(
              fs,
              "user.json",
              JSON.stringify(input),
              callBack
            );
          }
        });
      } else {
        fs.mkdir(`${__dirname}/../.mathLib`, (error0) => {
          if (!error0) {
            input[nam1] = {
              number: num1,
              type: typeof num1,
              date: new Date().toString(),
              asynch: asynchronous1,
            };
            return asyncMainMemoNode(
              fs,
              "user.json",
              JSON.stringify(input),
              callBack
            );
          } else {
            callBack(error0);
          }
        });
      }
    });
  }
}

function asyncMainMemoNode(fs, fileName, input, callBack) {
  fs.open(
    `${__dirname}/../.mathLib/${fileName}`,
    "w+",
    (error1, fileDescriptor) => {
      if (!error1 && fileDescriptor) {
        fs.writeFile(
          `${__dirname}/../.mathLib/${fileName}`,
          input,
          (error2) => {
            if (!error2) {
              fs.close(fileDescriptor, (error3) => {
                if (!error3) {
                  callBack("saved");
                } else {
                  callBack(error3);
                }
              });
            } else {
              callBack(error2);
            }
          }
        );
      } else {
        fs.writeFile(
          `${__dirname}/../.mathLib/${fileName}`,
          input,
          (error2) => {
            if (!error2) {
              fs.close(fileDescriptor, (error3) => {
                if (!error3) {
                  callBack("saved");
                } else {
                  callBack(error3);
                }
              });
            } else {
              callBack(error2);
            }
          }
        );
      }
    }
  );
}

//expot and share
module.exports = memo;
