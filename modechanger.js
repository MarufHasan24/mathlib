/*
Title: modechanger.js
Author: Maruf Hasan
Description: change mode
Date: 07 March, 2023
*/

// dependencies
const fs = require("fs");
const clear = require("clear");
//readline
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const modepath = __dirname + "./handelar/moods/mood.json";
//curent mood
const moodData = JSON.parse(fs.readFileSync(modepath, "utf-8"));
//readline
rl.question(
  'Enter your calculation mood here. "sci" for science and "fix" for fixed mood. And if you want normal mood then just press enter and follow the next instructions',
  (mood) => {
    if (mood === "sci" || mood === "fix") {
      //ask for mood status
      rl.question(
        "Enter your mood status here: It should be between 0 and 12",
        (status) => {
          //change mood
          if (status > 12) status = 12;
          else if (status < 0) status = 0;
          moodData.mood = mood;
          moodData.status = status;
          //write mood
          fs.writeFileSync(modepath, JSON.stringify(moodData));
          //close readline
          rl.close();
          //write final data
          console.log(
            `Your mood is changed to ${mood} mood with status ${status}`
          );
        }
      );
    } else {
      //change mood
      moodData.mood = "normal";
      moodData.status = null;
      //write mood
      fs.writeFileSync(modepath, JSON.stringify(moodData));
      //close readline
      rl.close();
      //write final data
      console.log("Your mood is changed to normal mood with null status");
    }
    clear();
  }
);
