/*
Title : Mathlib
Author : Maruf Hasan
Description : mathlib is an laibrary of math where we can find our day to day life's almost all small and frequently used maths solvance whice are mostly make hard our programming practice.
Date : 24 September, 2021
Version : 1.0.0
 */

//dependencies
const fs = require("fs");
// all is perfect
let recorDir = __dirname + "/.record";

if (!fs.existsSync(recorDir)) {
  fs.mkdirSync(recorDir);
  fs.mkdirSync(recorDir + "/.trush");
  fs.mkdirSync(recorDir + "/.restored");
} else if (!fs.existsSync(recorDir + "/.trush")) {
  fs.mkdirSync(recorDir + "/.trush");
} else if (!fs.existsSync(recorDir + "/.restored")) {
  fs.mkdirSync(recorDir + "/.restored");
}

const handelar = require("./handelar/index.js");
const lhandelar = require(__dirname + "/.localhandelar");

//module scaffolding
const main = {
  ...__addTheMathObject(),
  ...__addConstantsToTheMainMathObject(),
  ...handelar,
  add: (...numbers) => {
    if (numbers.length > 1) {
      let result = 0;
      for (let i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] === "number") {
          result += numbers[i];
        } else {
          lhandelar.error("a number", i + " no.", "sum");
        }
      }
      return lhandelar.mood(result);
    } else {
      throw `Please enter at least two numbers to sum.`;
    }
  },
  multiply: (...numbers) => {
    if (numbers.length > 1) {
      let result = 1;
      for (let i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] === "number") {
          result *= numbers[i];
        } else {
          lhandelar.error("a number", i + " no.", "multiply");
        }
      }
      return lhandelar.mood(result);
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
          lhandelar.error("a number", i + " no.", "sub");
        }
      }
      return lhandelar.mood(result);
    } else {
      throw `Please enter at least two numbers to subtract.`;
    }
  },
  divide: (...numbers) => {
    if (numbers.length > 1) {
      let result = numbers[0];
      for (let i = 1; i < numbers.length; i++) {
        if (typeof numbers[i] === "number") {
          result /= numbers[i];
        } else {
          lhandelar.error("a number", i + " no.", "devide");
        }
      }
      return lhandelar.mood(result);
    } else {
      throw `Please enter at least two numbers to divide.`;
    }
  },
  setmood: (mood, status) => {
    let moodpath = __dirname + "/handelar/moods/mood.json";
    if (mood === "sci" || mood === "fix") {
      //change mood
      if (status > 12) status = 12;
      else if (status < 0) status = 0;
      if (mood === "sci") mood = "science";
      else if (mood === "fix") mood = "fixed";
      //write mood
      fs.writeFileSync(moodpath, JSON.stringify({ mood, status }));
      return { mood, status };
    } else {
      //write mood
      fs.writeFileSync(
        moodpath,
        JSON.stringify({ mood: "normal", status: null })
      );
      return { mood: "normal", status: null };
    }
  },
};

/*--add the math object--*/
function __addTheMathObject() {
  let MathArray = Object.getOwnPropertyNames(Math);
  let local = {};
  for (let i = 0; i < MathArray.length; i++) {
    local[MathArray[i]] = Math[MathArray[i]];
  }
  return local;
}
require("./handelar/trush")();
function __addConstantsToTheMainMathObject() {
  let data = fs.readFileSync(`${__dirname}/constants.json`, "utf8");
  let obj = { ...JSON.parse(data) };
  return obj;
}

let mainArray = Object.keys(main);
for (let i = 0; i < mainArray.length; i++) {
  Object.defineProperty(main, mainArray[i], {
    enumerable: false,
    writable: true,
  });
}
module.exports = main;
