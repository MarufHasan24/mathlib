/*constructor
Title: index.js
Author: Maruf Hasan
Description: creates a vector
Date: 29 September, 2022
*/

function Vector(x, y, z) {
  this.x = x || 0;
  this.y = y || 0;
  this.z = z || 0;
  this.__proto__.type = "vector";
  const vector = [x, y, z];
  this.__proto__.value = function () {
    let result = 0;
    result = (vector[0] ** 2 + vector[1] ** 2 + vector[2] ** 2) ** 0.5;
    return result;
  };
  //add method add
  this.__proto__.add = function (vec) {
    if (vec.type !== "vector")
      throw new Error("Invalid vector. Do it by a vector constructor");
    let result = [];
    result = [vector[0] + vec.x, vector[1] + vec.y, vector[2] + vec.z];
    return result;
  };
  //add method subtract
  this.__proto__.subtract = function (vec) {
    if (vec.type !== "vector")
      throw new Error("Invalid vector. Do it by a vector constructor");
    let result = [];
    result = [vector[0] - vec.x, vector[1] - vec.y, vector[2] - vec.z];
    return result;
  };
  //add method dot
  this.__proto__.dot = function (vec) {
    if (vec.type !== "vector")
      throw new Error("Invalid vector. Do it by a vector constructor");
    let result = 0;
    result = vector[0] * vec.x + vector[1] * vec.y + vector[2] * vec.z;
    return result;
  };
  //add method cross
  this.__proto__.cross = function (vec) {
    if (vec.type !== "vector")
      throw new Error("Invalid vector. Do it by a vector constructor");
    for (let i = 0; i < 3; i++) {
      let result = [];
      let constA = [0, 1, 2];
      let perfA = [1, 2];
      for (let i = 0; i < 3; i++) {
        perfA = constA.filter((item) => item !== i);
        result[i] =
          (vector[perfA[0]] * vec.vector[perfA[1]] -
            vector[perfA[1]] * vec.vector[perfA[0]]) *
          (-1) ** i;
      }
      return result;
    }
  };
  //add method angle
  this.__proto__.angle = function (vec) {
    if (vec.type !== "vector")
      throw new Error("Invalid vector. Do it by a vector constructor");
    let result = 0;
    result = this.dot(vec) / (this.value() * vec.value());
    return result;
  };
  //add method equals
  this.__proto__.equals = function (vec) {
    if (vec.type !== "vector")
      throw new Error("Invalid vector. Do it by a vector constructor");
    let result = false;
    if (vector[0] === vec.x && vector[1] === vec.y && vector[2] === vec.z) {
      result = true;
    }
    return result;
  };
  //add method toString
  this.__proto__.toString = function () {
    let result = "";
    result = `${vector[0]}i^${vector[1]}j^${vector[2]}k^`;
    return result;
  };
}

module.exports = Vector;
