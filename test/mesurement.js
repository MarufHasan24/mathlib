const math = require("../index");
console.log(math.quad([1, 2], [3, 4], [1, -4], [1, 3])); // [-1, -1]
console.log(math.tringle([1, 2], [3, 4], [1, -4])); // [2, 2]
console.log(math.polyArea([1, 2], [3, 4], [1, -4], [1, 3], [4, 9], [7, 3])); // 27
console.log(math.polyArea([1, 2], [3, 4], [1, -4], [1, 3])); // 6
