let passCount = 0;
let Failed = 0;
function describe(description, callback) {
  console.log("started testing for " + description+ "....");
  callback();
  addToLog(description, passCount, Failed);
  console.log("passed test cases: " + passCount);
  console.log("failed test cases: " + Failed);
  console.log("total test cases: " + (passCount + Failed)+"\n\n");
}
function it(description, callback) {
  console.log(description);
  callback();
}
function expect(actual) {
  return {
    toEqual: function (expected) {
      if (Array.isArray(actual) && Array.isArray(expected)) {
        if (actual.length === expected.length) {
          if(checkArray(actual, expected)){
            console.log("✅ Passed");
            passCount++;
          }else{
            Failed++;
            console.error("❌ Failed: " + actual + " is not equal to " + expected);
          }
        } else {
          Failed++;
          console.error("❌ Failed: " + actual + " is not equal to " + expected);
        }
      }else if (actual instanceof Object && expected instanceof Object) {
        if (Object.keys(actual).length === Object.keys(expected).length) {
          if(checkObject(actual, expected)){
            console.log("✅ Passed");
            passCount++;
          }
          else{
            Failed++;
            console.error("❌ Failed: " + actual + " is not equal to " + expected);
          }
        }
      }
      else if (actual === expected) {
        console.log("✅ Passed");
        passCount++;
      } else {
        Failed++;
        console.error("❌ Failed: " + actual + " is not equal to " + expected);
      }
    },
    toBeLessThanOrEqual: function (expected) {
      if (actual <= expected) {
        console.log("✅ Passed");
        passCount++;
      } else {
        Failed++;
        console.error("❌ Failed: " + actual + " is not less than or equal to " + expected);
      }
    },
    toBeGreaterThanOrEqual: function (expected) {
      if (actual >= expected) {
        console.log("✅ Passed");
        passCount++;
      } else {
        Failed++;
        console.error("❌ Failed: " + actual + " is not greater than or equal to " + expected);
      }
    },
    catchError: function (expected) {
      try {
        actual();
      } catch (error) {
        if (error instanceof expected) {
            console.log("✅ Passed");
            passCount++;
        } else {
            Failed++;
            console.errorr("❌ Failed: " + actual + " is not an instance of " + expected);
        }
      }
    },
  };
}
function addToLog(description,passCount, Failed) {
  const fs = require("fs");
  const path = require("path"); 
  const filePath = path.join(__dirname, "log.txt");
    fs.writeFileSync(filePath, `${description}, ${passCount}, ${Failed}`);
}

function checkArray(actual, expected){
  expected = expected.sort();
  actual = actual.sort();
  for(let i=0; i<actual.length; i++){
    if(Array.isArray(actual[i]) && Array.isArray(expected[i])){
      return checkArray(actual[i], expected[i]);
      }else if(actual[i] instanceof Object && expected[i] instanceof Object){
        return checkObject(actual[i], expected[i]);
      }else{
      if (actual[i] === expected[i]){
        continue;
      }else{
        return false;
      }
    }
  }
  return true;
}

function checkObject(actual, expected){
  let actualKeys = Object.keys(actual);
  let expectedKeys = Object.keys(expected);
  for(let i=0; i<actualKeys.length; i++){
    if(Array.isArray(actual[actualKeys[i]]) && Array.isArray(expected[expectedKeys[i]])){
      return checkArray(actual[actualKeys[i]], expected[expectedKeys[i]]);
    }else if(actual[actualKeys[i]] instanceof Object && expected[expectedKeys[i]] instanceof Object){
      return checkObject(actual[actualKeys[i]], expected[expectedKeys[i]]);
    }else{
      if (actual[actualKeys[i]] === expected[expectedKeys[i]]){
        continue;
      }else{
        return false;
      }
    }
  }
  return true;
}

module.exports = { describe, it, expect };