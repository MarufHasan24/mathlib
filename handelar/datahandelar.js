/*
Title : data handelar
Author : Maruf Hasan
Description : handel user data
Date : 13 November, 2021
*/

//dependencies
const fs = require("fs");
const rcdPath = `${__dirname}/../.record`;
const recordCCpath = `${__dirname}/../../../../`;
let record = {};

const moods = {};
moods.sci = require("./moods/science.js");
moods.fix = require("./moods/fixed.js");

// save data
let mood = fs.readFileSync(`${__dirname}/moods/mood.json`, "utf-8");

function local(_answer, _fresult, _mood, _input, _calculas) {
  let currentData = {
    date: new Date().toDateString(),
    time: new Date().toTimeString(),
    input: _input,
    calculas: _calculas,
    realAnswer: _answer,
    answer: _fresult,
    mood: JSON.parse(_mood),
  };

  try {
    record = JSON.parse(
      fs.readFileSync(
        `${rcdPath}/${new Date().getFullYear()}-${
          new Date().getMonth() + 1
        }-${new Date().getDate()}.json`,
        "utf-8"
      )
    );
    record[`T${Date.now()}`] = currentData;
    fs.writeFileSync(
      `${rcdPath}/${new Date().getFullYear()}-${
        new Date().getMonth() + 1
      }-${new Date().getDate()}.json`,
      JSON.stringify(record)
    );
  } catch {
    record[`T${Date.now()}`] = currentData;
    fs.writeFileSync(
      `${rcdPath}/${new Date().getFullYear()}-${
        new Date().getMonth() + 1
      }-${new Date().getDate()}.json`,
      JSON.stringify(record)
    );
  }
}

function main(answer, input, from = "hidden") {
  let fresult;
  const ans = answer;
  const inp = input;
  const calculetor = from === "hidden" ? "hidden" : `${from}()`;
  if (typeof ans === "number") {
    const moodData = JSON.parse(
      fs.readFileSync(__dirname + "/moods/mood.json", "utf-8")
    );
    if (moodData.mood === "normal" && moodData.status === null) {
      fresult = ans;
      local(ans, fresult, mood, inp, calculetor);
    } else if (
      moodData.mood !== "normal" &&
      typeof moodData.status === "number" &&
      !Number.isNaN(moodData.status)
    ) {
      if (moodData.mood === "science") {
        fresult = `${moods.sci(moodData.status, ans)}`;
        local(ans, fresult, mood, inp, calculetor);
      } else if (moodData.mood === "fixed") {
        fresult = moods.fix(moodData.status, ans);
        local(ans, fresult, mood, inp, calculetor);
      } else {
        console.log("error");
      }
    } else {
      handelar.error("Math error", "answer", "handelar.record()", RangeError);
    }
  } else {
    // other features wiil come soon...
    fresult = ans;
    local(ans, fresult, mood, inp, calculetor);
  }
}

// export and share
module.exports = main;
