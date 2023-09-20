/*
Title : fix_memo.js
Author : Maruf Hasan
Description : change the mood of calculation.
Date : 6 December , 2021
*/

// dependensis
const fs = require("fs");
const dir = __dirname + "/../.mathLib";

//record is here
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

function fix_memo() {
  fs.unlinkSync(`${dir}/memo.json`);
  fs.writeFileSync(`${dir}/memo.json`, JSON.stringify({}));
  require("./../clear")();
}
fix_memo();
