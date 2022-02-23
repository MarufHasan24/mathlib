/*
Title : Error
Author : Maruf Hasan
Description : rise custom errors when users input is wrong.
Date : 5 October, 2021
*/

/*---Error function---*/
function error(type, place, name, ErrorType = TypeError, customString = "") {
  if (typeof type === "string" && typeof place === "string") {
    throw new ErrorType(
      `There is an error in the ${place} parameter of the math.${name}(). Please enter ${type} here! ${customString}.
      if you think that it's a bug you can report this bug here : https://github.com/bicitrobiggan/mathlib-n/issues
      `
    );
  } else {
    throw `There is an error in your input!`;
  }
}
//export amd share
module.exports = error;
