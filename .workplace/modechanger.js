/*
Title : modechanger.js
Author : Maruf Hasan
Description : change the mode of calculation.
Date : 22 November , 2021
*/

//dependencies
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const fs = require("fs");

function usrInpuTheMode() {
  readline.question(
    `Enter your calculation mode here. sci for science and fix for fixed mode. And if you want  normal mode then just press enter and follow the next instructions. $_ `,
    (mode) => {
      let name = "";
      if (mode === "sci") {
        name = "science";
      } else if (mode === "fix") {
        name = "fixed";
      } else {
        name = "normal";
      }
      if (name !== "normal") {
        readline.question(
          `Enter the status of ${name} here. 1~15  $_ `,
          (status) => {
            status = parseInt(status) <= 15 ? parseInt(status) : 15;
            fs.writeFileSync(
              `${__dirname}/../handelar/mode/mode.json`,
              JSON.stringify({
                mode: name,
                status,
              })
            );
            //prefer to right mode
            console.log(`mode ${name} seted at ${status}.`);
            readline.close();
          }
        );
      } else {
        let confarmationNum = Math.floor(Math.random() * 899 + 100);
        readline.question(
          `Are you setting mode as normal? Please confrim! Enter number ${confarmationNum} . $_ `,
          (status) => {
            if (status == confarmationNum) {
              status = null;
              fs.writeFileSync(
                `${__dirname}/../handelar/mode/mode.json`,
                JSON.stringify({
                  mode: name,
                  status,
                })
              );
              console.log(`mode ${name} seted at ${status}.`);
              readline.close();
            } else {
              usrInpuTheMode();
            }
          }
        );
      }
    }
  );
}

usrInpuTheMode();
