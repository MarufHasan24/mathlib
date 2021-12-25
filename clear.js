/*
Title : 
Author : Maruf Hasan
Description :
Date : , 2021
*/

//dependencies
const fs = require("fs");
let moods = JSON.parse(
  fs.readFileSync(`${__dirname}/handelar/moods/mood.json`, "utf-8")
);
let record = fs.readdirSync(__dirname + "/.record/");
record = record.splice(1);
let trush = fs.readdirSync(__dirname + "/.record/.trush/");

mathlib = function () {
  let mathlib = ` __  __       _   _     _      _ _ \n|  \\/  |     | | | |   | |    (_) |\n| \\  / | __ _| |_| |__ | |     _| |__\n| |\\/| |/ _\` | __| '_ \\| |    | | '_ \\\n| |  | | (_| | |_| | | | |____| | |_) |\n|_|  |_|\\__,_|\\__|_| |_|______|_|_.__/\n\nmood : ${moods.mood},  status : ${moods.status},  record : ${record.length},  trush : ${trush.length}`;
  let i = 1;
  let st = setInterval(styleTheName, 100);

  function styleTheName() {
    let im = mathlib.substring(0, i);
    console.clear();
    console.log(im);
    if (i < mathlib.length) {
      i++;
    } else {
      i = mathlib.length - 1;
      clearInterval(st);
    }
  }
};

//main function to export
module.exports = mathlib;
