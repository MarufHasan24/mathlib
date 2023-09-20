/*constructor
Title: index.js
Author: Maruf Hasan
Description: creates a vector
Date: 29 September, 2022
*/

const { record } = require("./../.localhandelar");

function Vector(x, y, z) {
  this.x = x || 0;
  this.y = y || 0;
  this.z = z || 0;
  this.__proto__.type = "vector";
  this.__proto__.value = function () {
    let result = 0;
    result = (this.x ** 2 + this.y ** 2 + this.z ** 2) ** 0.5;
    return result;
  };
  //add method add
  this.__proto__.add = function (vec) {
    if (vec.type !== "vector")
      throw new Error("Invalid vector. Do it by a vector constructor");
    let result = [];
    result = [this.x + vec.x, this.y + vec.y, this.z + vec.z];
    return new Vector(...result);
  };
  //add method subtract
  this.__proto__.sub = function (vec) {
    if (vec.type !== "vector")
      throw new Error("Invalid vector. Do it by a vector constructor");
    let result = [];
    result = [this.x - vec.x, this.y - vec.y, this.z - vec.z];
    record(result, vec, "sub");
    return new Vector(...result);
  };
  //add method dot
  this.__proto__.dot = function (vec) {
    if (vec.type !== "vector")
      throw new Error("Invalid vector. Do it by a vector constructor");
    let result = 0;
    result = this.x * vec.x + this.y * vec.y + this.z * vec.z;
    record(result, vec, "dot");
    return result;
  };
  //add method cross
  this.__proto__.cross = function (vec) {
    if (vec.type !== "vector")
      throw new Error("Invalid vector. Do it by a vector constructor");
    let result = [];
    result = [
      this.y * vec.z - this.z * vec.y,
      this.z * vec.x - this.x * vec.z,
      this.x * vec.y - this.y * vec.x,
    ];
    record(result, vec, "cross");
    return new Vector(...result);
  };
  //add method divide
  this.__proto__.divide = function (vec) {
    if (vec.type !== "vector")
      throw new Error("Invalid vector. Do it by a vector constructor");
    let result = [];
    result = [this.x / vec.x, this.y / vec.y, this.z / vec.z];
    record(result, vec, "divide");
    return new Vector(...result);
  };
  //add method angle
  this.__proto__.angle = function (vec) {
    if (vec.type !== "vector")
      throw new Error("Invalid vector. Do it by a vector constructor");
    let result = 0;
    result = this.dot(vec) / (this.value() * vec.value());
    record(result, vec, "angle");
    return result;
  };
  //add method equals
  this.__proto__.equals = function (vec) {
    if (vec.type !== "vector")
      throw new Error("Invalid vector. Do it by a vector constructor");
    let result = false;
    if (this.x === vec.x && this.y === vec.y && this.z === vec.z) {
      result = true;
    }
    record(result, vec, "equals");
    return result;
  };
  //add method toString
  this.__proto__.toString = function () {
    let result = "";
    i = this.x > 0 ? this.x : this.x;
    j = this.y > 0 ? "+" + this.y : this.y;
    k = this.z > 0 ? "+" + this.z : this.z;
    result = `${i}i${j}j${k}k`;
    record(result, this, "toString");
    return result;
  };
  //add method toArray
  this.__proto__.toArray = function () {
    let result = [];
    result = [this.x, this.y, this.z];
    record(result, this, "toArray");
    return result;
  };
}

module.exports = Vector;
