const { Matrix } = require("../index.js");
const { describe, it, expect } = require("vitest");
describe("Matrix", function () {
  it("should add matrices", function () {
    expect(matrix1.add(matrix2)).toEqual(
      new Matrix([
        [6, 8],
        [10, 12],
      ])
    );
  }
  );
  it("should subtract matrices", function () {
    expect(matrix1.sub(matrix2)).toEqual(
      new Matrix([
        [-4, -4],
        [-4, -4],
      ])
    );
  }
  );
  it("should divide matrices", function () {
    expect(matrix1.div(scalar)).toEqual(
      new Matrix([
        [0.5, 1],
        [1.5, 2],
      ])
    );
  }
  );
  it("should multiply matrices", function () {
    expect(matrix1.mul(matrix2)).toEqual(
      new Matrix([
        [19, 22],
        [43, 50],
      ])
    );
  }
  );
  it("should transpose matrices", function () {
    expect(matrix1.trnsp()).toEqual(
      new Matrix([
        [1, 3],
        [2, 4],
      ])
    );
  }
  );
  it("should find determinant of matrices", function () {
    expect(matrix1.det()).toEqual(-2);
  }
  );
  it("should find inverse of matrices", function () {
    expect(matrix1.inv()).toEqual(
      new Matrix([
        [-0.5, 1],
        [1.5, -2],
      ])
    );
  }
  );
  it("should find sum of matrices", function () {
    expect(matrix1.sum()).toEqual(10);
  }
  );
  it("should find difference of matrices", function () {
    expect(matrix1.difference()).toEqual(-10);
  }
  );
  it("should find product of matrices", function () {
    expect(matrix1.product()).toEqual(24);
  }
  );
  it("should find trace of matrices", function () {
    expect(matrix1.trace()).toEqual(5);
  }
  );
  it("should find rank of matrices", function () {
    expect(matrix1.rank()).toEqual(2);
  }
  );
  it("should find adjoint of matrices", function () {
    expect(matrix1.adjoint()).toEqual(
      new Matrix([
        [1, 2],
        [3, 4],
      ])
    );
  }
  );
  it("should find magic square of matrices", function () {
    expect(matrix1.magicSquare()).toEqual(false);
  }
  );
  it("should check if square matrix", function () {
    expect(matrix1.isSquare()).toEqual(true);
  }
  );
  it("should check if symmetric matrix", function () {
    expect(matrix1.isSymmetric()).toEqual(false);
  }
  );
  it("should check if skew symmetric matrix", function () {
    expect(matrix1.isSkewSymmetric()).toEqual(false);
  }
  );
  it("should check if identity matrix", function () {
    expect(matrix1.isIdentity()).toEqual(false);
  }
  );
  it("should check if upper triangular matrix", function () {
    expect(matrix1.isUpperTriangular()).toEqual(false);
  }
  );
  it("should check if lower triangular matrix", function () {
    expect(matrix1.isLowerTriangular()).toEqual(false);
  }
  );
  it("should check if diagonal matrix", function () {
    expect(matrix1.isDiagonal()).toEqual(false);
  }
  );
  it("should check if orthogonal matrix", function () {
    expect(matrix1.isOrthogonal()).toEqual(true);
  }
  );
  it("should check if unitary matrix", function () {
    expect(matrix1.isUnitary()).toEqual(true);
  }
  );
  it("should check if zero matrix", function () {
    expect(matrix1.isZero()).toEqual(false);
  }
  );
  it("should check if scalar matrix", function () {
    expect(matrix1.isScalar()).toEqual(false);
  }
  );
  it("should check if row echelon matrix", function () {
    expect(matrix1.isRowEchelon()).toEqual(true);
  }
  );
}
);