/*
Title: getmemo.js
Author: Maruf Hasan
Description: get memory data
Date: 13 September, 2023
*/
const handelar = require("../.localhandelar");
const fs = require("fs");

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
      return handelar.record(
        num,
        { number, type: typeof number, name, asynchronous, callBack },
        "memo"
      );
      return handelar.mode(fresult);
    } else {
      MemoNode(num, nam, asy, (call) => {
        callBack(call);
        return handelar.record(
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
        "memo",
        TypeError,
        "And don't add any number[0-9] at the starting of the name"
      );
    } else if (asy === null) {
      handelar.error("a boolean value", "asynchronous", "memo");
    } else {
      console.error("Somthing went wrong in memo");
    }
  }
}
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
        return handelar.record(result, { name, asynchronous }, "deMemo");
      });
    } else {
      result = deMemoNode(nam, asy);
      return handelar.record(result, { name, asynchronous }, "deMemo");
    }
  } else {
    handelar.error(
      "a string",
      "name",
      "deMemo",
      TypeError,
      "And don't add any number[0-9] at the starting of the name"
    );
  }
}

//assistant functions
function MemoNode(number1, name1, asynchronous1, callBack = null) {
  let nam1 = name1;
  let num1 = number1;
  let input = {};
  if (!asynchronous1) {
    try {
      callBack = null;
      let folder = fs.readdirSync(`${__dirname}/../.mathLib`);
      const data = fs.readFileSync(
        `${__dirname}/../.mathLib/memo.json`,
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
          `${__dirname}/../.mathLib/memo.json`,
          JSON.stringify(input),
          { encoding: "utf-8", flag: "w+" }
        );
        return handelar.mode("saved");
      } else {
        fs.mkdirSync(`${__dirname}/../.mathLib`);
        fs.writeFileSync(
          `${__dirname}/../.mathLib/memo.json`,
          JSON.stringify(input),
          { encoding: "utf-8", flag: "w+" }
        );
        return handelar.mode("saved");
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
          `${__dirname}/../.mathLib/memo.json`,
          JSON.stringify(input),
          { encoding: "utf-8", flag: "w+" }
        );
        return handelar.mode("saved");
      } catch (e) {
        console.log("Don't delete the memo.json file from .mathLib folder!");
        if (!fs.readdirSync(`${__dirname}/../.mathLib`).length) {
          fs.writeFileSync(
            `${__dirname}/../.mathLib/memo.json`,
            JSON.stringify(input),
            { encoding: "utf-8", flag: "w+" }
          );
          return handelar.mode("saved");
        }
      }
    }
  } else {
    //asynchronous
    fs.readdir(`${__dirname}/../.mathLib`, (error, files) => {
      if (!error && files) {
        fs.readFile(`${__dirname}/../.mathLib/memo.json`, (errorM, data) => {
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
              "memo.json",
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
              "memo.json",
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
              "memo.json",
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
function delMemoLocal(name1, asynchronous1, callback) {
  if (!asynchronous1) {
    try {
      let data = fs.readFileSync(`${__dirname}/../.mathLib/memo.json`, "utf8");
      let output = JSON.parse(data);
      let keyArr = Object.keys(output);
      if (keyArr.indexOf(name1) >= 0) {
        delete output[name1];
        fs.writeFileSync(
          `${__dirname}/../.mathLib/memo.json`,
          JSON.stringify(output)
        );
        return handelar.mode("done");
      } else if (name1 === "ALL") {
        output = {};
        fs.writeFileSync(
          `${__dirname}/../.mathLib/memo.json`,
          JSON.stringify(output)
        );
        return handelar.mode("all clear");
      } else {
        throw ReferenceError(`${name1} can't found in local databage.`);
      }
    } catch (e) {
      throw e;
    }
  } else {
    fs.readFile(
      `${__dirname}/../.mathLib/memo.json`,
      "utf8",
      (error1, data) => {
        if (!error1 && data) {
          let output = JSON.parse(data);
          let keyArr = Object.keys(output);
          if (keyArr.indexOf(name1) >= 0) {
            delete output[name1];
            fs.writeFile(
              `${__dirname}/../.mathLib/memo.json`,
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
              `${__dirname}/../.mathLib/memo.json`,
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
function deMemoNode(name1, asynchronous1 = false, callBack = null) {
  const fs = require("fs");
  if (!asynchronous1) {
    try {
      let data = fs.readFileSync(`${__dirname}/../.mathLib/memo.json`, "utf8");
      let output = JSON.parse(data);
      let keyArr = Object.keys(output);
      if (keyArr.indexOf(name1) >= 0) {
        return handelar.mode(output[name1]);
      } else {
        return handelar.mode(`not found`);
      }
    } catch (e) {
      console.log(e);
    }
  } else {
    fs.readFile(
      `${__dirname}/../.mathLib/memo.json`,
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
module.exports = {
  memo,
  delMemo,
  deMemo,
};
