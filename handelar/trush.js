/*
Title : trush
Author : Maruf Hasan
Description : put user data in trush
Date : 13 November, 2021
*/

// dependensis
const fs = require("fs");
const date = new Date();
const Dir = __dirname + "/../.record";

// trush
function trush() {
  deleteForever();
  let recordData = fs.readdirSync(Dir);
  trustPos = recordData.indexOf(".trush");
  recordData = recordData.splice(trustPos + 1);
  for (let i = 0; i < recordData.length; i++) {
    let yearCheck =
      date.getFullYear() === parseInt(recordData[i].substring(0, 4)) &&
      date.getMonth() + 1 !== 1
        ? true
        : false;
    let monthDate = recordData[i].substring(5).replace(".json", "").split("-");
    if (yearCheck) {
      if (date.getMonth() + 1 === parseInt(monthDate[0])) {
        // do nothing
      } else if (
        date.getMonth() === parseInt(monthDate[0]) &&
        date.getDate() >= parseInt(monthDate[1])
      ) {
        // do nothing
      } else if (
        date.getMonth() === parseInt(monthDate[0]) &&
        date.getDate() < parseInt(monthDate[1])
      ) {
        fs.renameSync(
          `${Dir}/${recordData[i]}`,
          `${Dir}/.trush/${recordData[i]}`
        );
      } else {
        fs.unlinkSync(`${Dir}/${recordData[i]}`);
      }
    } else {
      fs.unlinkSync(`${Dir}/${recordData[i]}`);
    }
  }
} // delete forever
function deleteForever() {
  trushData = fs.readdirSync(`${Dir}/.trush`);
  for (let i = 0; i < trushData.length; i++) {
    let monthDate = trushData[i].substring(5).replace(".json", "").split("-");
    if (
      date.getMonth() <= parseInt(monthDate[0]) &&
      date.getDate() < parseInt(monthDate[1])
    ) {
      // do nothing
    } else {
      fs.unlinkSync(`${Dir}/.trush/${trushData[i]}`);
    }
  }
}

trush();
module.exports = trush;
