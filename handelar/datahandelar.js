/*
Title : data handelar
Author : Maruf Hasan
Description : handel user data
Date : 13 November, 2021
*/

//dependencies
const { existsSync, mkdirSync, writeFileSync } = require("fs");
const rcdPath = `${__dirname}/../.record`;
const mode = {};
mode.sci = require("./mode/science.js");
mode.fix = require("./mode/fixed.js");

const today = new Date();
function local(_answer, _fresult, _mode, _input, _calculas) {
  let currentData = {
    date: new Date().toDateString(),
    time: new Date().toTimeString(),
    input: _input,
    calculas: _calculas,
    answer: _fresult,
    mode: _mode,
  };
  if (_mode.mode !== "normal") {
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
  let modeData = require(__dirname + "/mode/mode.json");
  let fresult;
  const ans = answer;
  const inp = input;
  const calculetor = from === "hidden" ? "hidden" : `${from}()`;
  if (typeof ans === "number") {
    if (modeData.mode === "normal" && modeData.status === null) {
      fresult = ans;
      local(ans, fresult, modeData, inp, calculetor);
    } else if (
      modeData.mode !== "normal" &&
      typeof modeData.status === "number" &&
      !Number.isNaN(modeData.status)
    ) {
      if (modeData.mode === "science") {
        fresult = `${mode.sci(modeData.status, ans)}`;
        local(ans, fresult, modeData, inp, calculetor);
      } else if (modeData.mode === "fixed") {
        fresult = mode.fix(modeData.status, ans);
        local(ans, fresult, modeData, inp, calculetor);
      } else {
        console.log("error");
      }
    } else {
      handelar.error("Math error", "answer", "handelar.record", RangeError);
    }
  } else {
    // other features wiil come soon...
    fresult = ans;
    local(ans, fresult, modeData, inp, calculetor);
  }
  return fresult;
}

// export and share
module.exports = main;
