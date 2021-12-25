/*
Title : fix_memo.js
Author : Maruf Hasan
Description : change the mood of calculation.
Date : 6 December , 2021
*/

// dependensis
const fs = require("fs");
const dir = __dirname + "/../.mathLib";

function fix_memo() {
  fs.unlinkSync(`${dir}/user.json`);
  fs.writeFileSync(`${dir}/user.json`, JSON.stringify({}));
  require("./../clear")();
}
fix_memo();
