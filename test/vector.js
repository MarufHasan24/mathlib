const { Vector } = require("../index.js");
// Create vectors
const vector1 = new Vector(2, 3, 5);
const vector2 = new Vector(4, 5);
// Perform vector operations
const sum = vector1.add(vector2);
const difference = vector1.sub(vector2);
const dotProduct = vector1.dot(vector2);
const crossProduct = vector1.cross(vector2);
const divided = vector1.div(2);
const angle = vector1.angle(vector2);
const areEqual = vector1.equals(vector2);
const stringRep = vector1.toString();
const arrayRep = vector1.toArray();
// Print results
console.log("Vector 1:", vector1);
console.log("Vector 2:", vector2);
console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Dot Product:", dotProduct);
console.log("Cross Product:", crossProduct);
console.log("Divided:", divided);
console.log("Angle:", angle);
console.log("Are Equal:", areEqual);
console.log("String Representation:", stringRep);
console.log("Array Representation:", arrayRep);
