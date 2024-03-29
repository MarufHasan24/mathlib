/*
Title: matrix.js
Author: Maruf Hasan
Description: solves matrix
Date: 08 March, 2023
*/
const { record } = require("./../.localhandelar");
//constructor
function Matrix(matrix, row, col) {
  if (
    typeof matrix === "number" &&
    typeof row === "number" &&
    typeof col === "undefined"
  ) {
    matrix = [];
    for (let i = 0; i < row; i++) {
      let rowa = [];
      for (let j = 0; j < row; j++) {
        rowa.push(0);
      }
      matrix.push(rowa);
    }
    this.matrix = matrix;
  } else if (Array.isArray(matrix)) {
    this.matrix = matrix;
  } else {
    throw new Error(
      "Invalid input. input must be an array seems to be a matrix or numbers of rows and columns"
    );
  }
  this.row = row || matrix.length;
  this.column = col || matrix[0].length;
  this.__proto__.type = "matrix";
  if (!validMatrix(this.matrix)) {
    throw new Error("Invalid matrix. All rows must have same length");
  }
  this.__proto__.det = function () {
    if (this.row !== this.column) {
      throw new Error("Matrix is not square");
    } else {
      return record(determinant(this.matrix));
    }
  };
  this.__proto__.inv = function () {
    if (this.row !== this.column) {
      throw new Error("Matrix is not square");
    } else {
      let result = inverse(this.matrix);
      record(result, this.matrix, "inverse");
      return new Matrix(result, this.row, matrix.column);
    }
  };
  this.__proto__.add = function (matrix) {
    if (matrix?.type !== "matrix")
      throw new Error("Invalid matrix. Use matrix constructor");
    if (this.row !== matrix.row || this.column !== matrix.column) {
      throw new Error("Matrix size mismatch");
    } else {
      let result = [];
      for (let i = 0; i < this.row; i++) {
        let row = [];
        for (let j = 0; j < this.column; j++) {
          row.push(this.matrix[i][j] + matrix.matrix[i][j]);
        }
        result.push(row);
      }
      record(result, matrix, "add");
      return new Matrix(result, this.row, matrix.column);
    }
  };
  this.__proto__.sub = function (matrix) {
    if (matrix?.type !== "matrix")
      throw new Error("Invalid matrix. Use matrix constructor");
    if (this.row !== matrix.row || this.column !== matrix.column) {
      throw new Error("Matrix size mismatch");
    } else {
      let result = [];
      for (let i = 0; i < this.row; i++) {
        let row = [];
        for (let j = 0; j < this.column; j++) {
          row.push(this.matrix[i][j] - matrix.matrix[i][j]);
        }
        result.push(row);
      }
      record(result, matrix, "sub");
      return new Matrix(result, this.row, matrix.column);
    }
  };
  this.__proto__.div = function (matrix) {
    if (matrix?.type !== "matrix" && typeof matrix !== "number") {
      throw new Error(
        "Invalid matrix or NaN. Use matrix constructor or number"
      );
    } else if (matrix.type === "matrix") {
      if (this.row !== matrix.row || this.column !== matrix.column) {
        throw new Error("Matrix size mismatch");
      } else {
        let result = [];
        for (let i = 0; i < this.row; i++) {
          let row = [];
          for (let j = 0; j < this.column; j++) {
            row.push(this.matrix[i][j] / matrix.matrix[i][j]);
          }
          result.push(row);
        }
        record(result, matrix, "div");
        return new Matrix(result);
      }
    } else {
      let result = [];
      for (let i = 0; i < this.row; i++) {
        let row = [];
        for (let j = 0; j < this.column; j++) {
          row.push(this.matrix[i][j] / matrix);
        }
        result.push(row);
      }
      record(result, matrix, "div");
      return new Matrix(result);
    }
  };
  this.__proto__.mul = function (matrix) {
    if (matrix?.type !== "matrix" && typeof matrix !== "number") {
      throw new Error("Invalid matrix or NaN. Use matrix constructor");
    } else if (matrix.type === "matrix") {
      if (this.column !== matrix.row) {
        throw new Error("Matrix size mismatch");
      } else {
        let result = [];
        for (let i = 0; i < this.row; i++) {
          let row = [];
          for (let j = 0; j < matrix.column; j++) {
            let sum = 0;
            for (let k = 0; k < this.column; k++) {
              sum += this.matrix[i][k] * matrix.matrix[k][j];
            }
            row.push(sum);
          }
          result.push(row);
        }
        record(result, matrix, "mul");
        return new Matrix(result, this.row, matrix.column);
      }
    } else {
      let result = [];
      for (let i = 0; i < this.row; i++) {
        let row = [];
        for (let j = 0; j < this.column; j++) {
          row.push(this.matrix[i][j] * matrix);
        }
        result.push(row);
      }
      record(result, matrix, "mul");
      return new Matrix(result);
    }
  };
  this.__proto__.trnsp = function () {
    let result = [];
    for (let i = 0; i < this.column; i++) {
      let row = [];
      for (let j = 0; j < this.row; j++) {
        row.push(this.matrix[j][i]);
      }
      result.push(row);
    }
    record(result, this.matrix, "trnsp");
    return new Matrix(result, this.column, this.row);
  };
  this.__proto__.isSquare = function () {
    return this.row === this.column;
  };
  this.__proto__.isSymmetric = function () {
    if (this.isSquare()) {
      for (let i = 0; i < this.row; i++) {
        for (let j = 0; j < this.column; j++) {
          if (this.matrix[i][j] !== this.matrix[j][i]) {
            return false;
          }
        }
      }
      return true;
    } else {
      return false;
    }
  };
  this.__proto__.isSkewSymmetric = function () {
    if (this.isSquare()) {
      for (let i = 0; i < this.row; i++) {
        for (let j = 0; j < this.column; j++) {
          if (this.matrix[i][j] !== -this.matrix[j][i]) {
            return false;
          }
        }
      }
      return true;
    } else {
      return false;
    }
  };
  this.__proto__.isIdentity = function () {
    if (this.isSquare()) {
      for (let i = 0; i < this.row; i++) {
        for (let j = 0; j < this.column; j++) {
          if (i === j && this.matrix[i][j] !== 1) {
            return false;
          } else if (i !== j && this.matrix[i][j] !== 0) {
            return false;
          }
        }
      }
      return true;
    } else {
      return false;
    }
  };
  this.__proto__.isUpperTriangular = function () {
    if (this.isSquare()) {
      for (let i = 0; i < this.row; i++) {
        for (let j = 0; j < i; j++) {
          if (this.matrix[i][j] !== 0) {
            return false;
          }
        }
      }
      return true;
    } else {
      return false;
    }
  };
  this.__proto__.isLowerTriangular = function () {
    if (this.isSquare()) {
      for (let i = 0; i < this.row; i++) {
        for (let j = i + 1; j < this.column; j++) {
          if (this.matrix[i][j] !== 0) {
            return false;
          }
        }
      }
      return true;
    } else {
      return false;
    }
  };
  this.__proto__.isDiagonal = function () {
    if (this.isSquare()) {
      for (let i = 0; i < this.row; i++) {
        for (let j = 0; j < this.column; j++) {
          if (i !== j && this.matrix[i][j] !== 0) {
            return false;
          }
        }
      }
      return true;
    } else {
      return false;
    }
  };
  this.__proto__.isOrthogonal = function () {
    if (this.isSquare()) {
      let trnsp = this.trnsp();
      let product = this.mul(trnsp);
      for (let i = 0; i < product.row; i++) {
        for (let j = 0; j < product.col; j++) {
          if (i === j && product.matrix[i][j] !== 1) {
            return false;
          } else if (i !== j && product.matrix[i][j] !== 0) {
            return false;
          }
        }
      }
      return true;
    } else {
      return false;
    }
  };
  this.__proto__.isUnitary = function () {
    if (this.isSquare()) {
      let trnsp = this.trnsp();
      let product = this.mul(trnsp);
      for (let i = 0; i < product.row; i++) {
        for (let j = 0; j < product.col; j++) {
          if (i === j && product.matrix[i][j] !== 1) {
            return false;
          } else if (i !== j && product.matrix[i][j] !== 0) {
            return false;
          }
        }
      }
      return true;
    } else {
      return false;
    }
  };
  this.__proto__.isZero = function () {
    for (let i = 0; i < this.row; i++) {
      for (let j = 0; j < this.column; j++) {
        if (this.matrix[i][j] !== 0) {
          return false;
        }
      }
    }
    return true;
  };
  this.__proto__.isScalar = function () {
    if (this.isSquare()) {
      for (let i = 0; i < this.row; i++) {
        for (let j = 0; j < this.column; j++) {
          if (i !== j && this.matrix[i][j] !== 0) {
            return false;
          }
        }
      }
      return true;
    } else {
      return false;
    }
  };
  this.__proto__.isRowEchelon = function () {
    let count = 0;
    for (let i = 0; i < this.row; i++) {
      for (let j = 0; j < this.column; j++) {
        if (this.matrix[i][j] !== 0) {
          count++;
          break;
        }
      }
    }
    return count === this.row;
  };
  this.__proto__.rank = function () {
    let count = 0;
    for (let i = 0; i < this.row; i++) {
      for (let j = 0; j < this.column; j++) {
        if (this.matrix[i][j] !== 0) {
          count++;
          break;
        }
      }
    }
    return count;
  };
  this.__proto__.adjoint = function () {
    if (this.isSquare()) {
      let result = adjoint(this.matrix);
      record(result, this.matrix, "adjoint");
      return new Matrix(this.matrix);
    } else {
      return false;
    }
  };
  this.__proto__.magicSquare = function () {
    if (this.isSquare()) {
      let sum = this.matrix[0].reduce((a, b) => a + b);
      for (let i = 1; i < this.row; i++) {
        if (sum !== this.matrix[i].reduce((a, b) => a + b)) {
          return false;
        }
      }
      for (let i = 0; i < this.row; i++) {
        if (sum !== this.matrix.reduce((a, b) => a + b[i], 0)) {
          return false;
        }
      }
      let sum1 = 0;
      let sum2 = 0;
      for (let i = 0; i < this.row; i++) {
        sum1 += this.matrix[i][i];
        sum2 += this.matrix[i][this.row - i - 1];
      }
      if (sum !== sum1 || sum !== sum2) {
        return false;
      }
      return true;
    } else {
      return false;
    }
  };
  this.__proto__.trace = function () {
    if (this.isSquare()) {
      let sum = 0;
      for (let i = 0; i < this.row; i++) {
        sum += this.matrix[i][i];
      }
      return sum;
    } else {
      return false;
    }
  };
}

function determinant(matrix) {
  if (matrix.length === 1) {
    return matrix[0][0];
  } else {
    let det = 0;
    for (let i = 0; i < matrix.length; i++) {
      let subMatrix = [];
      for (let j = 1; j < matrix.length; j++) {
        subMatrix.push(matrix[j].filter((_, index) => index !== i));
      }
      det += matrix[0][i] * Math.pow(-1, i) * determinant(subMatrix);
    }
    return det;
  }
}
function adjoint(matrix) {
  let cofactorMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    let row = [];
    for (let j = 0; j < matrix.length; j++) {
      let subMatrix = [];
      for (let k = 0; k < matrix.length; k++) {
        if (k !== i) {
          subMatrix.push(matrix[k].filter((_, index) => index !== j));
        }
      }
      row.push(Math.pow(-1, i + j) * determinant(subMatrix));
    }
    cofactorMatrix.push(row);
  }
  let adjointMatrix = [];
  for (let i = 0; i < cofactorMatrix.length; i++) {
    adjointMatrix.push(cofactorMatrix[i].reverse());
  }
  adjointMatrix = adjointMatrix.reverse();
  return adjointMatrix;
}
function inverse(matrix) {
  let det = determinant(matrix);
  if (det === 0) {
    return false;
  } else {
    let adjointMatrix = adjoint(matrix);
    let inverseMatrix = [];
    for (let i = 0; i < adjointMatrix.length; i++) {
      let row = [];
      for (let j = 0; j < adjointMatrix.length; j++) {
        row.push(adjointMatrix[i][j] / det);
      }
      inverseMatrix.push(row);
    }
    return inverseMatrix;
  }
}
function validMatrix(matrix) {
  let il = matrix[0].length;
  for (let i = 1; i < matrix.length; i++) {
    if (matrix[i].length !== il) {
      return false;
    }
  }
  return true;
}
module.exports = Matrix;
