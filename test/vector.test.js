const { Vector } = require("../index.js");
const { describe, it, expect } = require("./../.workplace/tester");

const vector1 = new Vector(2, 3, 5);
const vector2 = new Vector(4, 5, 0);

describe("Vector", function () {
    it("should add vectors", function () {
        expect(vector1.add(vector2)).toEqual(
            new Vector(6, 8, 5)
        );
    }
    );
    it("should subtract vectors", function () {
        expect(vector1.sub(vector2)).toEqual(
            new Vector(-2, -2, 5)
        );
    }
    );
    it("should divide vectors", function () {
        expect(vector1.div(2)).toEqual(
            new Vector(1, 1.5, 2.5)
        );
    }
    );
    it("should find dot product of vectors", function () {
        expect(vector1.dot(vector2)).toEqual(23);
    }
    );
    it("should find cross product of vectors", function () {
        expect(vector1.cross(vector2)).toEqual(
            new Vector(-25, 20, -2)
        );
    }
    );
    it("should find angle between vectors", function () {
        expect(vector1.angle(vector2)).toEqual(0.582698780728861);
    }
    );
    it("should find if vectors are equal", function () {
        expect(vector1.equals(vector2)).toEqual(false);
    }
    );
    it("should find string representation of vectors", function () {
        expect(vector1.toString()).toEqual("2i+3j+5k");
    }
    );
    it("should find array representation of vectors", function () {
        expect(vector1.toArray()).toEqual([2, 3, 5]);
    }
    );
}
);