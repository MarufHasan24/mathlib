/*
Title : validJSONfileName.js
Author : Maruf Hasan
Description : check a JSON file is valid or not.
Date : 6 March, 2022
*/

function validJSONfileName(fileName) {
  let fileNm = typeof fileName === "string" ? fileName : false;
  if (fileNm !== false) {
    let JSONformate = /(\d).json/g;
    if (fileNm.search(JSONformate) >= 0) {
      return [true, "true"];
    } else {
      return [false, "wrongFormate"];
    }
  } else {
    if (fileNm === false) {
      return [false, "dataType"];
    } else {
      console.error("somthig went wrong");
    }
  }
}

module.exports = validJSONfileName;
