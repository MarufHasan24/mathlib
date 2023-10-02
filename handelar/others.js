/*
Title : others.js
Author : Maruf Hasan
Description : get together all the others assets and provide them to math.js
Date : 5 October, 2021
*/

//module scaffolding
let handelar = {};

//dependencies
const { record, error } = require("./../.localhandelar");
const { deg2Rad, rad2Deg } = require("./../assets/degree");
//main functions to export
handelar.leapYear = require("./../assets/leapyear"); //speacial use
handelar.prime = function (number) {
  if (typeof number === "number" && Number.isSafeInteger(number)) {
    if (number === 2) {
      return record(true);
    } else if (number > 1) {
      for (let i = 2; i < number; i++) {
        if (number % i !== 0) {
          return record(true, number, "prime");
        } else if (number === i * i) {
          return record(false, number, "prime");
        } else {
          return record(false, number, "prime");
        }
      }
    } else {
      return record(false, number, "prime");
    }
  } else {
    error("a natural number", "number", "prime");
  }
};
handelar.odd = function (number) {
  num = typeof number === "number" && !Number.isNaN(number) ? number : false;
  if (num !== false) {
    if (Number.isSafeInteger(number)) {
      if (number % 2 !== 0) {
        return record(true, number, "odd");
      } else {
        return record(false, number, "odd");
      }
    } else {
      if (!Number.isSafeInteger(number)) {
        return mode(false);
      } else {
        error("a natural number", "number", "odd");
      }
    }
  } else {
    error("a natural number", "number", "odd");
  }
};
handelar.permut = function (n, r) {
  let _n = typeof n === "number" && n > 0 ? n : false,
    _r = typeof r === "number" && r >= 0 && r <= n ? r : false;
  if (_n !== false && _r !== false) {
    let result = fact(_n) / fact(_n - _r);
    return record(result, { n, r }, "permut");
  } else {
    if (_n === false) {
      error("a valid number", "n", "permut");
    } else if (_r === false) {
      error("a valid number", "r", "permut");
    } else {
      console.error("Somthing went wrong in permut()");
    }
  }
};
handelar.combo = function (n, r) {
  let _n = typeof n === "number" ? n : NaN,
    _r = typeof r === "number" ? r : false;
  if (_n >= 0 && _r >= 0) {
    let result = fact(_n) / (fact(_n - _r) * fact(_r));
    return record(result, { n, r }, "combo");
  } else {
    if (_n === false || _n < 0) {
      error("a number", "n", "combo");
    } else if (_n === false || _n <= 0) {
      error("a number", "r", "combo");
    } else {
      console.error("Somthing went wrong in combo()");
    }
  }
};
handelar.sec = function (radian = 0) {
  let result;
  let d = typeof radian === "number" ? radian : false;
  if (d !== false) {
    result = 1 / Math.cos(d);
    return record(result, radian, "sec");
  } else {
    error("a number", "radian", "sec");
  }
};
handelar.cosec = function cosec(radian) {
  let result;
  let d = typeof radian === "number" ? radian : false;
  if (d !== false) {
    result = 1 / Math.sin(d);
  } else {
    error("a number", "radian", "cosec");
  }
  return record(result, radian, "cosec");
};
handelar.cot = function (radian) {
  let result;
  let d = typeof radian === "number" ? radian : false;
  if (d !== false) {
    if (((rad2Deg(d / 90) % 4) - 1 === 0 || rad2Deg(d) === 90) && d !== false) {
      result = 0;
    } else if (d !== false && !(rad2Deg(d) % 360 === 0 || rad2Deg(d) === 0)) {
      result = 1 / Math.tan(d);
    } else if ((rad2Deg(d) % 360 === 0 || rad2Deg(d) === 0) && d !== false) {
      result = Infinity;
    } else {
      error("a number", "radian", "cot");
    }
  } else {
    error("a number", "radian", "cot");
  }
  return record(result, radian, "cot");
};
handelar.tanx = function (input = 0) {
  let result;
  let regXp = /\d+(\.\d+)?\s*(?=PI)/gi;
  let inp;
  if (typeof input === "number") {
    inp = deg2Rad(input).radian;
  } else if (typeof input === "string") {
    if (input.match(regXp)) {
      inp = parseFloat(input.match(regXp)[0].trim()) * Math.PI;
    } else {
      error('string with a "PI"', "input", "tanx", SyntaxError);
    }
  } else {
    error('a number or string with a "PI"', "input", "tanx", SyntaxError);
  }
  let co = ((inp % (2 * Math.PI)) / Math.PI) * 4;
  if (co === 0 || co === 4) {
    result = 0;
  } else if (co === 1 || co === 5) {
    result = 1;
  } else if (co === 2 || co === 6) {
    result = Infinity;
  } else if (co === 3 || co === 7) {
    result = -1;
  } else {
    result = Math.tan(inp);
  }
  return record(result, input, "tanx");
};
handelar.sinx = function (input = 0) {
  let result;
  let inp =
    typeof input === "string" || typeof input === "number" ? input : false;
  if (inp !== false) {
    if (typeof input === "number") {
      inp = deg2Rad(input).radian * Math.PI;
    } else if (typeof input === "string") {
      let regXp = /\d+(\.\d+)?\s*(?=PI)/gi;
      inp = input.match(regXp)
        ? parseFloat(input.match(regXp)[0].trim()) * Math.PI
        : (() => {
            error('string with a "PI"', "input", "sinx", SyntaxError);
          })();
    } else {
      error("a valid string or a number", "input", "sinx");
    }
  } else {
    error("a string or a number", "input", "sinx");
  }
  let co = ((inp % (2 * Math.PI)) / Math.PI) * 8;
  if (co === 0 || co === 8 || co === 16) {
    result = 0;
  } else if (co === 1 || co === 7) {
    result = 0.5;
  } else if (co === 2 || co === 6) {
    result = 1 / Math.sqrt(2);
  } else if (co === 3 || co === 5) {
    result = Math.sqrt(3) / 2;
  } else if (co === 4) {
    result = 1;
  } else if (co === 9 || co === 15) {
    result = -0.5;
  } else if (co === 10 || co === 14) {
    result = -1 / Math.sqrt(2);
  } else if (co === 11 || co === 13) {
    result = -Math.sqrt(3) / 2;
  } else if (co === 12) {
    result = -1;
  } else {
    result = Math.sin(inp);
  }
  return record(result, input, "sinx");
};
handelar.cosx = function (input = 0) {
  let inp =
    typeof input === "string" || typeof input === "number" ? input : false;
  let result;
  if (inp !== false) {
    if (typeof inp === "number") {
      inp = deg2Rad(inp).radian * Math.PI;
    } else if (typeof inp === "string") {
      let regXp = /\d+(\.\d+)?\s*(?=PI)/gi;
      inp = input.match(regXp)
        ? input.match(regXp)[0]
        : (() => {
            error("a valid string with a PI", "input", "cosx");
          })();
    } else {
      error("a number or a string", "input", "cosx");
    }
  } else {
    if (inp === false) {
      error("a number or a string", "input", "cosx");
    } else {
      console.error("Somthing went wrong in cosx()");
    }
  }
  let co = ((inp % (2 * Math.PI)) / Math.PI) * 8;
  if (co === 0 || co === 16) {
    result = 1;
  } else if (co === 1 || co === 7) {
    result = Math.sqrt(3) / 2;
  } else if (co === 2 || co === 6) {
    result = 1 / Math.sqrt(2);
  } else if (co === 3 || co === 5) {
    result = 0.5;
  } else if (co === 4 || co === 12) {
    result = 0;
  } else if (co === 9 || co === 15) {
    result = -Math.sqrt(3) / 2;
  } else if (co === 10 || co === 14) {
    result = -1 / Math.sqrt(2);
  } else if (co === 11 || co === 13) {
    result = -0.5;
  } else if (co === 8) {
    result = -1;
  } else {
    result = Math.tan(inp);
  }
  return record(result, input, "cosx");
};
handelar.intersect = function (set1, set2) {
  let setA =
      Array.isArray(set1) || Object.getPrototypeOf(set1) === Set.prototype
        ? set1
        : false,
    setB =
      Array.isArray(set2) || Object.getPrototypeOf(set2) === Set.prototype
        ? set2
        : false;
  let result, resultSet;
  if (setA && setB) {
    if (
      Object.getPrototypeOf(setA) === Set.prototype &&
      Object.getPrototypeOf(setB) === Set.prototype
    ) {
      // they are sets
      resultSet = new Set([...setA].filter((element) => setB.has(element)));
    } else if (Array.isArray(setA) && Array.isArray(setB)) {
      // they are arrais
      resultSet = new Set(
        setA.filter((element) => new Set([...setB]).has(element))
      );
    } else {
      if (Object.getPrototypeOf(setA) !== Object.getPrototypeOf(setB)) {
        const err =
          "Please input both array or both set, but not like one is Array and the other is Set.";
        throw err;
      } else {
        console.error("Somthing went wrong in intersect()");
      }
    }
  } else {
    if (setA === false) {
      error("array or set", "set1", "intersect");
    } else if (setB === false) {
      error("array or set", "set2", "intersect");
    } else {
      console.error("Somthing went wrong in intersect()");
    }
  }
  result = Array.from(resultSet);
  return record(result, { set1, set2 }, "intersect");
};
handelar.union = function (set1, set2) {
  let setA =
      Array.isArray(set1) || Object.getPrototypeOf(set1) === Set.prototype
        ? set1
        : false,
    setB =
      Array.isArray(set2) || Object.getPrototypeOf(set2) === Set.prototype
        ? set2
        : false;
  let result, resultSet;
  if (setA && setB) {
    if (
      Object.getPrototypeOf(setA) === Set.prototype &&
      Object.getPrototypeOf(setB) === Set.prototype
    ) {
      // they are sets
      resultSet = new Set([...Array.from(setA), ...Array.from(setB)]);
    } else if (Array.isArray(setA) && Array.isArray(setB)) {
      // they are arrais
      resultSet = new Set([...setA, ...setB]);
    } else {
      if (Object.getPrototypeOf(setA) !== Object.getPrototypeOf(setB)) {
        const err =
          "Please input both array or both set, but not like one is Array and the other is Set.";
        throw err;
      } else {
        console.error("Somthing went wrong in union()");
      }
    }
  } else {
    if (setA === false) {
      error("array or set", "set1", "union");
    } else if (setB === false) {
      error("array or set", "set2", "union");
    } else {
      console.error("Somthing went wrong in union()");
    }
  }
  result = Array.from(resultSet);
  return record(result, { set1, set2 }, "union");
};
handelar.GCD = function (...numbers) {
  let result;
  let nums = [...numbers];
  if (nums.length >= 2) {
    let checkData = checkEveryoneIsSame(nums);
    if (checkData[0]) {
      nums.forEach((e, i, a) => {
        a[i] = Math.abs(e);
      });
      let decider = true,
        i = 0,
        destination = Math.min(...nums),
        resultArray = [],
        resultSet = new Set();
      while (decider && i < nums.length - 1) {
        global[`set${i}`] = new Set();
        for (let j = 1; j <= destination; j++) {
          if (
            Number.isInteger(nums[i] / j) &&
            Number.isInteger(nums[i + 1] / j)
          ) {
            decider = true;
            global[`set${i}`].add(j);
          } else {
            decider = true;
          }
          if (i >= 1 && j === destination) {
            resultSet = handelar.intersect(global.set0, global[`set${i}`]);
          } else if (i === 0) {
            resultSet = global.set0;
          }
        }
        i++;
      }
      resultArray = Array.from(resultSet);
      result =
        resultArray.sort(function (a, b) {
          return b - a;
        })[0] * checkData[1];
    } else {
      if (checkData[0] === false) {
        error("numbers must have same sign and not 0", "numbers", "GCD");
      } else {
        console.error("Somthing went wrong in GCD()");
      }
    }
  } else {
    error("2 or more number", "numbers", "GCD");
  }
  return record(result, numbers, "GCD");
};
handelar.LCM = function (...num) {
  num.forEach((e, i, a) => {
    if (typeof e !== "number") {
      error("a number of same sing", `${i}no.`, "LCM");
    } else {
      a[i] = e;
    }
  });
  let itsOkNow = checkEveryoneIsSame(num);
  if (itsOkNow[0]) {
    let result = [num[0]],
      _GCD;
    if (num.length >= 2) {
      for (let i = 0; i < num.length - 1; i++) {
        _GCD = handelar.GCD(result, num[i + 1]);
        result = (result / _GCD) * num[i + 1];
      }
      return mode(result);
    } else {
      error("2 or more number", `num`, "LCM");
    }
  } else {
    if (!itsOkNow[0]) {
      error("2 or more number", `num`, "LCM");
    } else {
      console.error("somthing went wrong in LCM()");
    }
  }
};

//functions used in main functions to assist
function checkEveryoneIsSame(nums) {
  let sym = [...nums];
  let i = 0;
  const frst = sym[0] / Math.abs(sym[0]);
  let num = true;
  while (num && i < sym.length) {
    sym[i] = sym[i] / Math.abs(sym[i]);
    if (sym[i] === frst) {
      num = true;
      i++;
    } else {
      num = false;
    }
  }
  return [num, frst];
}
function fact(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
}

//export and share
module.exports = handelar;
