/*
Title : Mathlib
Author : Maruf Hasan
Description : mathlib is an laibrary of math where we can find our day to day life's almost all small and frequently used maths solvance whice are mostly make hard our programming practice.
Date : 24 September, 2021
Version : 1.0.0
 */

//dependencies
const { existsSync, mkdirSync, writeFileSync, readFileSync } = require("fs");
const { record, error } = require("./.localhandelar");

// all is perfect?
let recorDir = __dirname + "/.record";
if (!existsSync(recorDir)) {
  mkdirSync(recorDir);
  mkdirSync(recorDir + "/.trush");
  mkdirSync(recorDir + "/.restored");
} else if (!existsSync(recorDir + "/.trush")) {
  mkdirSync(recorDir + "/.trush");
} else if (!existsSync(recorDir + "/.restored")) {
  mkdirSync(recorDir + "/.restored");
}
//module scaffolding
const math = {
  ...require(`${__dirname}/constants.json`),
  ...a(),
  ...require("./handelar/index.js"),
  add: (...numbers) => {
    if (numbers.length > 1) {
      let result = 0;
      for (let i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] === "number") {
          result += numbers[i];
        } else {
          error("a number", i + " no.", "add");
        }
      }
      return record(result, numbers, "add");
    } else {
      throw `Please enter at least two numbers to sum.`;
    }
  },
  mul: (...numbers) => {
    if (numbers.length > 1) {
      let result = 1;
      for (let i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] === "number") {
          result *= numbers[i];
        } else {
          error("a number", i + " no.", "mul");
        }
      }
      return record(result, numbers, "mul");
    } else {
      throw `Please enter at least two numbers to multiply.`;
    }
  },
  sub: (...numbers) => {
    if (numbers.length > 1) {
      let result = numbers[0];
      for (let i = 1; i < numbers.length; i++) {
        if (typeof numbers[i] === "number") {
          result -= numbers[i];
        } else {
          error("a number", i + " no.", "sub");
        }
      }
      return record(result, numbers, "sub");
    } else {
      throw `Please enter at least two numbers to subtract.`;
    }
  },
  div: (...numbers) => {
    if (numbers.length > 1) {
      let result = numbers[0];
      for (let i = 1; i < numbers.length; i++) {
        if (typeof numbers[i] === "number") {
          result /= numbers[i];
        } else {
          error("a number", i + " no.", "div");
        }
      }
      return record(result, numbers, "div");
    } else {
      throw `Please enter at least two numbers to divide.`;
    }
  },
  sums: (start, end, func) => {
    let Start =
      typeof start === "number" && !Number.isNaN(start) ? start : null;
    let End = typeof end === "number" && !Number.isNaN(end) ? end : null;
    let Func = typeof func === "function" ? func : null;
    if (Start !== null && End !== null && Func !== null) {
      try {
        r = func(start);
        if (r === undefined)
          error("a function", "func", "sum", SyntaxError, "return is absent");
        else if (typeof r !== "number")
          error(
            "a function which return a number",
            "func",
            "sum",
            SyntaxError,
            "return is not a number"
          );
      } catch (err) {
        error("a function", "func", "sum", SyntaxError);
      }
      if (Start <= End) {
        let result = 0;
        for (let i = start; i <= end; i++) {
          result += func(i);
        }
        return record(result, [start, end, func], "sum");
      } else {
        error(
          "start should be less than end",
          "start and end",
          "sum",
          RangeError
        );
      }
    } else {
      if (Start === null) error("a number", "start", "sum");
      if (End === null) error("a number", "end", "sum");
      if (Func === null) error("a function", "func", "sum");
    }
  },
  setmode: (mode, status) => {
    let modepath = __dirname + "/handelar/mode/mode.json";
    if (mode === "sci" || mode === "fix") {
      //change mode
      if (status > 12) status = 12;
      else if (status < 0) status = 0;
      if (mode === "sci") mode = "science";
      else if (mode === "fix") mode = "fixed";
      //write mode
      writeFileSync(modepath, JSON.stringify({ mode, status }));
      return { mode, status };
    } else {
      //write mode
      writeFileSync(modepath, JSON.stringify({ mode: "normal", status: null }));
      return { mode: "normal", status: null };
    }
  },
  getmode: () => {
    let modepath = __dirname + "/handelar/mode/mode.json";
    let data = readFileSync(modepath, "utf8");
    let obj = JSON.parse(data);
    return obj;
  },
};
//length
math.length = Object.keys(math).length + 1;
//redirects: old versions of functions
math.multiply = math.mul;
math.average = math.avg;
math.sum = math.add;
/*--add the math object--*/
function a() {
  let e = Object.getOwnPropertyNames(Math),
    t = {};
  for (let n = 0; n < e.length; n++) t[e[n]] = Math[e[n]];
  return t;
}
require("./handelar/trush")();
module.exports = math;
