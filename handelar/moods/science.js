/*
Title : sciencs.js
Author : Maruf Hasan
Description : hidden
Date : 18 November, 2021
*/

//dependencies

//main function to export
function main(number, answer) {
  let num = Number.isInteger(number) && number <= 15 && number > 0 ? number : 1;
  let ans = Number.isInteger(answer) ? answer : parseFloat(answer);
  if (typeof answer === "number") {
    if (num) {
      if (ans === 0) {
        return `${ans.toFixed(num - 1)}e0`;
      } else if (Math.abs(ans) >= 1) {
        return local1(ans, num);
      } else if (Math.abs(ans) < 1) {
        return local0(ans, num);
      } else {
        return answer;
      }
    } else {
      return answer;
    }
  } else if (Array.isArray(answer)) {
    let sci = [];
    for (let i = 0; i < answer.length; i++) {
      sci.push(main(number, answer[i]));
    }
  } else if (Object.prototype.isPrototypeOf(answer)) {
    let sci = {};
    for (let i = 0; i < answer.length; i++) {
      sci[i] = main(number, answer[i]);
    }
  } else if (Set.prototype.isPrototypeOf(answer)) {
    let sci = new Set();
    for (let i = 0; i < answer.length; i++) {
      sci.add(main(number, answer[i]));
    }
  } else if (Map.prototype.isPrototypeOf(answer)) {
    let sci = new Map();
    for (let i = 0; i < answer.length; i++) {
      sci.set(i, main(number, answer[i]));
    }
  } else {
    return answer;
  }
}

function local1(answer, number) {
  var div = 1 / 10,
    ans;
  var len;
  if (answer > 0) {
    if (!Number.isInteger(answer)) {
      len =
        answer.toString().indexOf(".") === -1
          ? 0
          : answer.toString().indexOf(".");
    } else {
      len = answer.toString().length;
    }
  } else {
    if (!Number.isInteger(answer)) {
      len =
        answer.toString().indexOf(".") === -1
          ? 0
          : answer.toString().indexOf(".") - 1;
    } else {
      len = answer.toString().length - 1;
    }
  }

  for (let i = 0; i < len; i++) {
    div *= 10;
  }
  ans = `${(answer / div).toFixed(number)}e${len - 1}`;
  return ans;
}

function local0(answer, number) {
  var div = 10,
    ans,
    regXp = /[1-9]/g,
    len;
  if (answer > 0) {
    len = answer.toString().search(regXp);
  } else {
    len = answer.toString().search(regXp) - 1;
  }
  for (let i = 0; i < len; i++) {
    div /= 10;
  }
  ans = `${(answer / div).toFixed(number)}e-${len - 1}`;
  return ans;
}

//export and share
module.exports = main;
