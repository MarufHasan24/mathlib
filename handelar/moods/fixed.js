/*
Title : fixed.js
Author : Maruf Hasan
Description : fix the
Date : 18 November, 2021
*/

// dependencies

// main function to export

function main(number, answer) {
  const num = typeof number === "number" ? number : null;
  const ans = typeof answer === "number" ? answer : null;
  if (num !== null && ans !== null) {
    const result = ans.toFixed(num);
    return result;
  }
}
// export and share
module.exports = main;
