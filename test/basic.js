let math = require("../index");

math.setmode();

console.log(math.add(1, 3, 5)); // 9
console.log(math.sub(1, 3, 6)); // -8
console.log(math.mul(1, 3, 8)); // 24
console.log(math.div(1, 2, 7)); // 0.07142857142857142
console.log(math.avg(1, 2, 3, 4, 5)); // 3
console.log(math.age(1990)); // 33
console.log(math.age(1990, 5, 1)); // [32, 4, 19]
console.log(math.age(1990, 9, 21, [2018, 7, 13])); // [27, 9, 22]
console.log(
  math.sums(1, 5, (x) => {
    return x * 2;
  })
); //30
console.log(math.random()); // a random number between 0 and 1
console.log(math.random(1, 10)); // a random number between 1 and 10
console.log(math.random(1, 10, 3)); // a random number between 1 and 10 as a float with 3 decimal places
console.log(math.random(1, 10, 0)); // a random number between 1 and 10 as an integer
console.log(math.logx(49, 7)); // 2
console.log(math.rootx(49, 2)); // 7
console.log(math.tanx(90)); // Infinity
console.log(math.tanx("0.5 pi")); // Infinity
console.log(math.tan(0.5 * math.PI)); // 1.633123935319537e+16
console.log(math.tan(0.25 * math.PI)); // 0.9999999999999999
console.log(math.tanx("0.25 pi")); // 1
console.log(math.sinx(0)); // 0
console.log(math.sinx("0.5 pi")); // 1
console.log(math.sin(0.5 * math.PI)); // 1
console.log(math.linearEq([1, 2, 3], [3, 4, 9])); // -1
console.log(math.qudrt(1, -4, 4)); // [2,2]
console.log(math.quad([1, 2], [3, 4], [1, -4], [1, 3])); // [-1, -1]
console.log(math.tringle([1, 2], [3, 4], [1, -4])); // [2, 2]
