let math = require("../index");
const {describe, it, expect} = require("vitest");
describe("math", function () {
  it("should add numbers", function () {
    expect(math.add(1, 3, 5)).toEqual(9);
  });
  it("should subtract numbers", function () {
    expect(math.sub(1, 3, 6)).toEqual(-8);
  });
  it("should multiply numbers", function () {
    expect(math.mul(1, 3, 8)).toEqual(24);
  });
  it("should divide numbers", function () {
    expect(math.div(1, 2, 7)).toEqual(0.07142857142857142);
  });
  it("should find average of numbers", function () {
    expect(math.avg(1, 2, 3, 4, 5)).toEqual(3);
  });
  it("should find age", function () {
    expect(math.age(1990)).toEqual(33);
  });
  it("should find age", function () {
    expect(math.age(1990, 5, 1)).toEqual([32, 4, 19]);
  });
  it("should find age", function () {
    expect(math.age(1990, 9, 21, [2018, 7, 13])).toEqual([27, 9, 22]);
  });
  it("should find sum", function () {
    expect(
      math.sums(1, 5, (x) => {
        return x * 2;
      })
    ).toEqual(30);
  });
  it("should generate random number", function () {
    expect(math.random()).toBeLessThanOrEqual(1);
  });
  it("should generate random number", function () {
    expect(math.random(1, 10)).toBeLessThanOrEqual(10);
  });
  it("should generate random number", function () {
    expect(math.random(1, 10, 3)).toBeLessThanOrEqual(10);
  });
  it("should generate random number", function () {
    expect(math.random(1, 10, 0)).toBeLessThanOrEqual(10);
  });
  it("should find log", function () {
    expect(math.logx(49, 7)).toEqual(2);
  });
  it("should find root", function () {
    expect(math.rootx(49, 2)).toEqual(7);
  });
  it("should find tan", function () {
    expect(math.tanx(90)).toEqual(Infinity);
  });
  it("should find tan", function () {
    expect(math.tanx("0.5 pi")).toEqual(Infinity);
  });
  it("should find tan", function () {
    expect(math.tan(0.5 * math.PI)).toEqual(1.633123935319537e16);
  });
  it("should find tan", function () {
    expect(math.tan(0.25 * math.PI)).toEqual(0.9999999999999999);
  });
  it("should find tan", function () {
    expect(math.tanx("0.25 pi")).toEqual(1);
  });
  it("should find sin", function () {
    expect(math.sinx(0)).toEqual(0);
  });
  it("should find sin", function () {
    expect(math.sinx("0.5 pi")).toEqual(1);
  });
  it("should find sin", function () {
    expect(math.sin(0.5 * math.PI)).toEqual(1);
  });
  it("should find linear equation", function () {
    expect(math.linearEq([1, 2, 3], [3, 4, 9])).toEqual(-1);
  });
  it("should find quadratic equation", function () {
    expect(math.qudrt(1, -4, 4)).toEqual([2, 2]);
  });
});