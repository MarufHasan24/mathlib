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
  if (num !== null && answer !== null) {
    if (typeof answer === "number") {
      return answer.toFixed(num);
    } else if (Array.isArray(answer)) {
      let fixed = [];
      for (let i = 0; i < answer.length; i++) {
        fixed.push(main(num, answer[i]));
      }
      return fixed;
    } else if (answer instanceof Object) {
      let fixed = {};
      for (let i = 0; i < answer.length; i++) {
        fixed[i] = main(num, answer[i]);
      }
      return fixed;
    } else if (Set.prototype.isPrototypeOf(answer)) {
      let fixed = new Set();
      for (let i = 0; i < answer.length; i++) {
        fixed.add(main(num, answer[i]));
      }
      return fixed;
    } else if (Map.prototype.isPrototypeOf(answer)) {
      let fixed = new Map();
      for (let i = 0; i < answer.length; i++) {
        fixed.set(i, main(num, answer[i]));
      }
      return fixed;
    } else {
      return answer;
    }
  } else {
    console.error("somthig went wrong in fixed.js");
  }
}
// export and share
module.exports = main;
