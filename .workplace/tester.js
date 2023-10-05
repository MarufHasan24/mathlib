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
      if (actual === expected) {
        console.log("Passed");
        passCount++;
      } else {
        Failed++;
        console.error("Failed")
      }
    },
    toBeLessThanOrEqual: function (expected) {
      if (actual <= expected) {
        console.log("Passed");
        passCount++;
      } else {
        Failed++;
        console.error("Failed")
      }
    },
    toBeGreaterThanOrEqual: function (expected) {
      if (actual >= expected) {
        console.log("Passed");
        passCount++;
      } else {
        Failed++;
        console.error("Failed")
      }
    },
    catchError: function (expected) {
      try {
        actual();
      } catch (error) {
        if (error instanceof expected) {
            console.log("Passed");
            passCount++;
        } else {
            Failed++;
            console.errorr("Failed")
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
module.exports = { describe, it, expect };