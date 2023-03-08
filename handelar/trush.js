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
    let monthDate = recordData[i].replace(".json", "").split("-");
    if (monthDate[0] >= date.getFullYear()) {
      if (monthDate[1] > date.getMonth()) {
        //do nothing
        //console.log([monthDate[1], date.getMonth() - 1]);
      } else if (
        monthDate[1] > date.getMonth() &&
        monthDate[2] > date.getDate()
      ) {
        //do nothing
        //console.log([monthDate[1], date.getMonth() - 1]);
      } else if (
        monthDate[1] > date.getMonth() - 1 &&
        monthDate[2] > date.getDate()
      ) {
        fs.rename(
          `${Dir}/${recordData[i]}`,
          `${Dir}/.trush/${recordData[i]}`,
          (error) => {
            if (error)
              console.error(
                "Somthing went wrong in auto trush system. Please report this bug here : https://github.com/MarufHasan24/mathlib/issues"
              );
          }
        );
      } else {
        if (monthDate[2] <= date.getDate()) {
          fs.rename(
            `${Dir}/${recordData[i]}`,
            `${Dir}/.trush/${recordData[i]}`,
            (error) => {
              if (error)
                console.error(
                  "Somthing went wrong in auto trush system. Please report this bug here : https://github.com/MarufHasan24/mathlib/issues"
                );
            }
          );
        } else {
          //do nothing
          //console.log([monthDate[2], date.getDate()]);
        }
      }
    } else if (
      monthDate[0] === date.getFullYear() - 1 &&
      monthDate[1] === 12 &&
      date.getMonth() === 0
    ) {
      //do nothing
      //console.log([monthDate, [date.getFullYear(), date.getMonth()]]);
    } else if (
      monthDate[0] === date.getFullYear() - 1 &&
      monthDate[1] === 11 &&
      date.getMonth() === 0
    ) {
      fs.rename(
        `${Dir}/${recordData[i]}`,
        `${Dir}/.trush/${recordData[i]}`,
        (error) => {
          if (error)
            console.error(
              "Somthing went wrong in auto trush system. Please report this bug here : https://github.com/MarufHasan24/mathlib/issues"
            );
        }
      );
      //console.log([monthDate, [date.getFullYear(), date.getMonth()]]);
    } else if (
      monthDate[0] === date.getFullYear() - 1 &&
      monthDate[1] === 12 &&
      date.getMonth() === 1
    ) {
      fs.rename(
        `${Dir}/${recordData[i]}`,
        `${Dir}/.trush/${recordData[i]}`,
        (error) => {
          if (error)
            console.error(
              "Somthing went wrong in auto trush system. Please report this bug here : https://github.com/MarufHasan24/mathlib/issues"
            );
        }
      );
      //console.log([monthDate, [date.getFullYear(), date.getMonth()]]);
    } else if (
      monthDate[0] === date.getFullYear() - 1 &&
      monthDate[1] === 11 &&
      date.getMonth() === 1
    ) {
      fs.unlink(`${Dir}/${recordData[i]}`, (error) => {
        if (error)
          console.error(
            "Somthing went wrong in auto trush system. Please report this bug here : https://github.com/MarufHasan24/mathlib/issues"
          );
      });
      //console.log([monthDate, [date.getFullYear(), date.getMonth()]]);
    } else {
      fs.unlink(`${Dir}/${recordData[i]}`, (error) => {
        if (error)
          console.error(
            "Somthing went wrong in auto trush system. Please report this bug here : https://github.com/MarufHasan24/mathlib/issues"
          );
      });
      //console.log([monthDate, [date.getFullYear(), date.getMonth()]]);
    }
  }
}

// delete forever
function deleteForever() {
  trushData = fs.readdirSync(`${Dir}/.trush`);
  for (let i = 0; i < trushData.length; i++) {
    let monthDate = trushData[i].replace(".json", "").split("-");
    if (monthDate[0] >= date.getFullYear()) {
      if (monthDate[1] > date.getMonth() - 1) {
        //do nothing
        //console.log([monthDate[1], date.getMonth() - 1]);
      } else if (
        monthDate[1] > date.getMonth() - 1 &&
        monthDate[2] > date.getDate()
      ) {
        //console.log([monthDate[1], date.getMonth() - 1]);
      } else {
        if (monthDate[2] <= date.getDate()) {
          fs.unlink(`${Dir}/.trush/${trushData[i]}`, (error) => {
            if (error)
              console.error(
                "Somthing went wrong in auto trush system. Please report this bug here : https://github.com/MarufHasan24/mathlib/issues"
              );
          });
        } else {
          //do nothing
          //console.log([monthDate[2], date.getDate()]);
        }
      }
    } else if (
      monthDate[0] === date.getFullYear() - 1 &&
      monthDate[1] === 11 &&
      date.getMonth() === 0
    ) {
      //do nothing
      //console.log([monthDate, [date.getFullYear(), date.getMonth()]]);
    } else {
      fs.unlink(`${Dir}/${recordData[i]}`, (error) => {
        if (error)
          console.error(
            "Somthing went wrong in auto trush system. Please report this bug here : https://github.com/MarufHasan24/mathlib/issues"
          );
      });
      //console.log([monthDate, [date.getFullYear(), date.getMonth()]]);
    }
  }
}

module.exports = trush;
