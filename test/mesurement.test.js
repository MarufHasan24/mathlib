const math = require("../index");

describe("Measurement", function () {
    it("should find the area of a polygon", function () {
        expect(math.polyArea([1, 2], [3, 4], [1, -4], [1, 3], [4, 9], [7, 3])).toEqual(27);
    }
    );
    it("should find the area of a triangle", function () {
        expect(math.tringle([1, 2], [3, 4], [1, -4])).toEqual([2,2]);
    }
    );
    it("should find the area of a quadrilateral", function () {
        expect(math.quad([1, 2], [3, 4], [1, -4], [1, 3])).toEqual([-1,-1]);
    }
    );  
    });