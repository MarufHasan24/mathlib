const { Vector, Matrix } = require("../index.js");
let t = new Matrix([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
let t1 = new Matrix(3, 4);
let t2 = new Matrix([
  [3, 1, 2],
  [4, 6, 7],
  [9, 3, 1],
]);
let v = new Vector(1, 2, 3);
let v2 = new Vector(3, 5);
// Matrix
console.log(t.add(t2));
console.log(t.sub(t2));
console.log(t2.mul(t));
console.log(t2.mul(5));
console.log(t2.div(5));
console.log(t2.trnsp());
console.log(t2.det());
console.log(t2.inv());
console.log(t2.rank());
console.log(t2.trace());
console.log(t1);
// Vector
console.log(v.add(v2));
console.log(v.sub(v2));
console.log(v.dot(v2));
console.log(v.cross(v2));
console.log(v.value());
console.log(v2.value());
console.log(v2.angle(v));
