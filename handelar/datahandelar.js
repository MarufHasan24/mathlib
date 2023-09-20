/*
Title : data handelar
Author : Maruf Hasan
Description : handel user data
Date : 13 November, 2021
*/

//dependencies
const { existsSync, mkdirSync, writeFileSync } = require("fs");
const rcdPath = `${__dirname}/../.record`;
const moods = {};
moods.sci = require("./moods/science.js");
moods.fix = require("./moods/fixed.js");

const today = new Date();
function local(_answer, _fresult, _mood, _input, _calculas) {
  let currentData = {
    date: new Date().toDateString(),
    time: new Date().toTimeString(),
    input: _input,
    calculas: _calculas,
    answer: _fresult,
    mood: _mood,
  };
  if (_mood.mood !== "normal") {
    currentData.realAnswer = _answer;
  }
  let data = {};
  let filename = `${today.getFullYear()}-${
    today.getMonth() + 1
  }-${today.getDate()}.json`;
  if (!existsSync(rcdPath)) mkdirSync(rcdPath);
  if (existsSync(`${rcdPath}/${filename}`)) {
    data = require(`${rcdPath}/${filename}`);
  }
  data["T" + Date.now()] = { ...currentData };
  writeFileSync(`${rcdPath}/${filename}`, JSON.stringify(data));
  return null;
}

function main(answer, input, from = "hidden") {
  let moodData = require(__dirname + "/moods/mood.json");
  let fresult;
  const ans = answer;
  const inp = input;
  const calculetor = from === "hidden" ? "hidden" : `${from}()`;
  if (typeof ans === "number") {
    if (moodData.mood === "normal" && moodData.status === null) {
      fresult = ans;
      local(ans, fresult, moodData, inp, calculetor);
    } else if (
      moodData.mood !== "normal" &&
      typeof moodData.status === "number" &&
      !Number.isNaN(moodData.status)
    ) {
      if (moodData.mood === "science") {
        fresult = `${moods.sci(moodData.status, ans)}`;
        local(ans, fresult, moodData, inp, calculetor);
      } else if (moodData.mood === "fixed") {
        fresult = moods.fix(moodData.status, ans);
        local(ans, fresult, moodData, inp, calculetor);
      } else {
        console.log("error");
      }
    } else {
      handelar.error("Math error", "answer", "handelar.record", RangeError);
    }
  } else {
    // other features wiil come soon...
    fresult = ans;
    local(ans, fresult, moodData, inp, calculetor);
  }
  return fresult;
}

// export and share
module.exports = main;
