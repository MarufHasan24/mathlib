/*
Title : union.js
Author : Maruf Hasan
Description : union between 2 arrays or sets
Date : 1 April, 2022
*/

//dependencies
const handelar = require("./../../.localhandelar");

// main function to export
function union(set1, set2) {
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
      handelar.error("array or set", "set1", "union");
    } else if (setB === false) {
      handelar.error("array or set", "set2", "union");
    } else {
      console.error("Somthing went wrong in union()");
    }
  }
  result = Array.from(resultSet);
  handelar.record(result, { set1, set2 }, "union");
  return handelar.mood(result);
}

// export and share
module.exports = union;
