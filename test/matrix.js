const { Matrix } = require("../index.js");
// Create matrices
const matrix1 = new Matrix([
  [1, 2],
  [3, 4],
]);
const matrix2 = new Matrix([
  [5, 6],
  [7, 8],
]);
const scalar = 2;

// Perform matrix operations
const determinant = matrix1.det();
const inverse = matrix1.inv();
const sum = matrix1.add(matrix2);
const difference = matrix1.sub(matrix2);
const divided = matrix1.div(scalar);
const product = matrix1.mul(matrix2);
const transposed = matrix1.trnsp();
const isSquareMatrix = matrix1.isSquare();
const isSymmetricMatrix = matrix1.isSymmetric();
const isSkewSymmetricMatrix = matrix1.isSkewSymmetric();
const isIdentityMatrix = matrix1.isIdentity();
const isUpperTriangularMatrix = matrix1.isUpperTriangular();
const isLowerTriangularMatrix = matrix1.isLowerTriangular();
const isDiagonalMatrix = matrix1.isDiagonal();
const isOrthogonalMatrix = matrix1.isOrthogonal();
const isUnitaryMatrix = matrix1.isUnitary();
const isZeroMatrix = matrix1.isZero();
const isScalarMatrix = matrix1.isScalar();
const isRowEchelonMatrix = matrix1.isRowEchelon();
const rankValue = matrix1.rank();
const adjointMatrix = matrix1.adjoint();
const magicSquareMatrix = matrix1.magicSquare();
const traceValue = matrix1.trace();
// Print results
console.log("Matrix 1:", matrix1);
console.log("Matrix 2:", matrix2);
console.log("Scalar:", scalar);
console.log("Determinant:", determinant);
console.log("Inverse:", inverse);
console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Divided:", divided);
console.log("Product:", product);
console.log("Transposed:", transposed);
console.log("Is Square:", isSquareMatrix);
console.log("Is Symmetric:", isSymmetricMatrix);
console.log("Is Skew Symmetric:", isSkewSymmetricMatrix);
console.log("Is Identity:", isIdentityMatrix);
console.log("Is Upper Triangular:", isUpperTriangularMatrix);
console.log("Is Lower Triangular:", isLowerTriangularMatrix);
console.log("Is Diagonal:", isDiagonalMatrix);
console.log("Is Orthogonal:", isOrthogonalMatrix);
console.log("Is Unitary:", isUnitaryMatrix);
console.log("Is Zero:", isZeroMatrix);
console.log("Is Scalar:", isScalarMatrix);
console.log("Is Row Echelon:", isRowEchelonMatrix);
console.log("Rank:", rankValue);
console.log("Adjoint:", adjointMatrix);
console.log("Magic Square:", magicSquareMatrix);
console.log("Trace:", traceValue);
