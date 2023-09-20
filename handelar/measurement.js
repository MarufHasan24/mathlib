/*
Title : measurement.js
Author : Maruf Hasan
Description : get together all the measurement assets and provide them to math.js
Date : 15 October, 2021
tempData : require('./../assets/measurement');
*/

//module scaffolding
let handelarX = {};

//dependencies
const handelar = require("./../.localhandelar");
const linearEq = require("./../assets/linearEquation");
const { rad2Deg } = require("./../assets/degree");

//main functions to export
handelarX.lineWidth = function (first_point = [0, 0], second_point = [0, 0]) {
  let fspnt =
      Array.isArray(first_point) && first_point.length === 2
        ? first_point
        : false,
    scpnt =
      Array.isArray(second_point) && second_point.length === 2
        ? second_point
        : false;
  let data = {
    x1: fspnt[0],
    x2: scpnt[0],
    y1: fspnt[1],
    y2: scpnt[1],
  };
  if (fspnt !== false && scpnt !== false) {
    let result;
    result = Math.pow((data.x2 - data.x1) ** 2 + (data.y2 - data.y1) ** 2, 0.5);
    return handelar.record(result, { first_point, second_point }, "lineWidth");
  } else {
    if (fspnt === false) {
      handelar.error("an array [x,y]", "first_point", "lineWidth");
    } else if (scpnt === false) {
      handelar.error("an array [x,y]", "second_point", "lineWidth");
    } else {
      console.error("Something went wrong in lineWidth()");
    }
  }
};
handelarX.tringleArea = function (
  first_point = [0, 0],
  second_point = [0, 0],
  third_point = [0, 0]
) {
  let fspnt =
      Array.isArray(first_point) && first_point.length === 2
        ? first_point
        : false,
    scpnt =
      Array.isArray(second_point) && second_point.length === 2
        ? second_point
        : false,
    trpnt =
      Array.isArray(third_point) && third_point.length === 2
        ? third_point
        : false;
  if (fspnt !== false && scpnt !== false && trpnt !== false) {
    let d = {
      x1: fspnt[0],
      y1: fspnt[1],
      x2: scpnt[0],
      y2: scpnt[1],
      x3: trpnt[0],
      y3: trpnt[1],
    };
    let area = Math.abs(
      0.5 * (d.x1 * (d.y2 - d.y3) + d.x2 * (d.y3 - d.y1) + d.x3 * (d.y1 - d.y2))
    );
    return handelar.record(
      area,
      { first_point, second_point, third_point },
      "tringleArea"
    );
  } else {
    if (fspnt === false) {
      handelar.error(
        "an array contains 2 numbers[x,y]",
        "first_point",
        "tringleArea"
      );
    } else if (scpnt === false) {
      handelar.error(
        "an array contains 2 numbers[x,y]",
        "second_point",
        "tringleArea"
      );
    } else if (trpnt === false) {
      handelar.error(
        "an array contains 2 numbers[x,y]",
        "third_point",
        "tringleArea"
      );
    } else {
      console.error("Something went wrong in tringleArea()");
    }
  }
};
handelarX.tringleLines = function (
  first_point = [0, 0],
  second_point = [0, 0],
  third_point = [0, 0]
) {
  let fspnt =
      Array.isArray(first_point) && first_point.length === 2
        ? first_point
        : false,
    scpnt =
      Array.isArray(second_point) && second_point.length === 2
        ? second_point
        : false,
    trpnt =
      Array.isArray(third_point) && third_point.length === 2
        ? third_point
        : false;
  if (fspnt !== false && scpnt !== false && trpnt !== false) {
    let d = {
      x1: fspnt[0],
      y1: fspnt[1],
      x2: scpnt[0],
      y2: scpnt[1],
      x3: trpnt[0],
      y3: trpnt[1],
    };
    let line_c = handelarX.lineWidth([d.x1, d.y1], [d.x2, d.y2]),
      line_a = handelarX.lineWidth([d.x2, d.y2], [d.x3, d.y3]),
      line_b = handelarX.lineWidth([d.x3, d.y3], [d.x1, d.y1]);
    let result = {
      line_a,
      line_b,
      line_c,
    };
    return handelar.record(
      result,
      { first_point, second_point, third_point },
      "tringleLines"
    );
  } else {
    if (fspnt === false) {
      handelar.error(
        "an array contains 2 numbers[x,y]",
        "first_point",
        "tringleLines"
      );
    } else if (scpnt === false) {
      handelar.error(
        "an array contains 2 numbers[x,y]",
        "second_point",
        "tringleLines"
      );
    } else if (trpnt === false) {
      handelar.error(
        "an array contains 2 numbers[x,y]",
        "third_point",
        "tringleLines"
      );
    } else {
      console.error("Something went wrong in tringleLines()");
    }
  }
};
handelarX.tringleAngles = function (
  first_point = [0, 0],
  second_point = [0, 0],
  third_point = [0, 0]
) {
  let fspnt =
      Array.isArray(first_point) && first_point.length === 2
        ? first_point
        : false,
    scpnt =
      Array.isArray(second_point) && second_point.length === 2
        ? second_point
        : false,
    trpnt =
      Array.isArray(third_point) && third_point.length === 2
        ? third_point
        : false;
  if (fspnt !== false && scpnt !== false && trpnt !== false) {
    let d = {
      x1: fspnt[0],
      y1: fspnt[1],
      x2: scpnt[0],
      y2: scpnt[1],
      x3: trpnt[0],
      y3: trpnt[1],
    };
    let area = Math.abs(
      0.5 * (d.x1 * (d.y2 - d.y3) + d.x2 * (d.y3 - d.y1) + d.x3 * (d.y1 - d.y2))
    );
    let line_c = handelarX.lineWidth([d.x1, d.y1], [d.x2, d.y2]),
      line_a = handelarX.lineWidth([d.x2, d.y2], [d.x3, d.y3]),
      line_b = handelarX.lineWidth([d.x3, d.y3], [d.x1, d.y1]),
      thetaA = rad2Deg(Math.asin((2 * area) / (line_c * line_b))).degree,
      thetaB = rad2Deg(Math.asin((2 * area) / (line_c * line_a))).degree,
      thetaC = rad2Deg(Math.asin((2 * area) / (line_a * line_b))).degree;
    let result = {
      thetaA,
      thetaB,
      thetaC,
    };
    return handelar.record(
      result,
      { first_point, second_point, third_point },
      "tringleAngles"
    );
  } else {
    if (fspnt === false) {
      handelar.error(
        "an array contains 2 numbers[x,y]",
        "first_point",
        "tringleAngles"
      );
    } else if (scpnt === false) {
      handelar.error(
        "an array contains 2 numbers[x,y]",
        "second_point",
        "tringleAngles"
      );
    } else if (trpnt === false) {
      handelar.error(
        "an array contains 2 numbers[x,y]",
        "third_point",
        "tringleAngles"
      );
    } else {
      console.error("Something went wrong in tringleAngles()");
    }
  }
};
handelarX.tringleMed = function (
  first_point = [0, 0],
  second_point = [0, 0],
  third_point = [0, 0]
) {
  let result;
  let fspnt =
      Array.isArray(first_point) && first_point.length === 2
        ? first_point
        : false,
    scpnt =
      Array.isArray(second_point) && second_point.length === 2
        ? second_point
        : false,
    trpnt =
      Array.isArray(third_point) && third_point.length === 2
        ? third_point
        : false;

  if (fspnt !== false && scpnt !== false && trpnt !== false) {
    let d = {
      x1: fspnt[0],
      y1: fspnt[1],
      x2: scpnt[0],
      y2: scpnt[1],
      x3: trpnt[0],
      y3: trpnt[1],
    };
    let x3 = (d.x1 + d.x2) / 2,
      y3 = (d.y1 + d.y2) / 2,
      x1 = (d.x2 + d.x3) / 2,
      y1 = (d.y2 + d.y3) / 2,
      x2 = (d.x3 + d.x1) / 2,
      y2 = (d.y3 + d.y1) / 2,
      mid_ad = handelarX.lineWidth([d.x1, d.y1], [x1, y1]),
      mid_be = handelarX.lineWidth([d.x2, d.y2], [x2, y2]),
      mid_cf = handelarX.lineWidth([d.x3, d.y3], [x3, y3]);
    result = {
      D: [x1, y1],
      E: [x2, y2],
      F: [x3, y3],
      mid_ad,
      mid_be,
      mid_cf,
    };
    return handelar.record(
      result,
      { first_point, second_point, third_point },
      "tringleMed"
    );
  } else {
    if (fspnt === false) {
      handelar.error(
        "an array contains 2 numbers[x,y]",
        "first_point",
        "tringleMed"
      );
    } else if (scpnt === false) {
      handelar.error(
        "an array contains 2 numbers[x,y]",
        "second_point",
        "tringleMed"
      );
    } else if (trpnt === false) {
      handelar.error(
        "an array contains 2 numbers[x,y]",
        "third_point",
        "tringleMed"
      );
    } else {
      console.error("Something went wrong in tringleMed()");
    }
  }
};
handelarX.tringle = function (
  first_point = [0, 0],
  second_point = [0, 0],
  third_point = [0, 0]
) {
  let fspnt =
      Array.isArray(first_point) && first_point.length === 2
        ? first_point
        : false,
    scpnt =
      Array.isArray(second_point) && second_point.length === 2
        ? second_point
        : false,
    trpnt =
      Array.isArray(third_point) && third_point.length === 2
        ? third_point
        : false;
  if (fspnt !== false && scpnt !== false && trpnt !== false) {
    let d = {
      x1: fspnt[0],
      y1: fspnt[1],
      x2: scpnt[0],
      y2: scpnt[1],
      x3: trpnt[0],
      y3: trpnt[1],
    };
    let area = Math.abs(
      0.5 * (d.x1 * (d.y2 - d.y3) + d.x2 * (d.y3 - d.y1) + d.x3 * (d.y1 - d.y2))
    );
    let line_c = handelarX.lineWidth([d.x1, d.y1], [d.x2, d.y2]),
      line_a = handelarX.lineWidth([d.x2, d.y2], [d.x3, d.y3]),
      line_b = handelarX.lineWidth([d.x3, d.y3], [d.x1, d.y1]),
      cntrd = [(d.x1 + d.x2 + d.x3) / 3, (d.y1 + d.y2 + d.y3) / 3],
      thetaA = rad2Deg(Math.asin((2 * area) / (line_c * line_b))).degree,
      thetaB = rad2Deg(Math.asin((2 * area) / (line_c * line_a))).degree,
      thetaC = rad2Deg(Math.asin((2 * area) / (line_a * line_b))).degree;
    let result = {
      area,
      line_a,
      line_b,
      line_c,
      cntrd,
      thetaA,
      thetaB,
      thetaC,
      ...handelarX.tringleMed(fspnt, scpnt, trpnt),
    };
    return handelar.record(
      result,
      { first_point, second_point, third_point },
      "tringle"
    );
  } else {
    if (fspnt === false) {
      handelar.error(
        "an array contains 2 numbers[x,y]",
        "first_point",
        "tringle"
      );
    } else if (scpnt === false) {
      handelar.error(
        "an array contains 2 numbers[x,y]",
        "second_point",
        "tringle"
      );
    } else if (trpnt === false) {
      handelar.error(
        "an array contains 2 numbers[x,y]",
        "third_point",
        "tringle"
      );
    } else {
      console.error("Something went wrong in tringle()");
    }
  }
};
handelarX.quadArea = function (
  first_point = [0, 0],
  second_point = [0, 0],
  third_point = [0, 0],
  fourth_point = [0, 0]
) {
  let fspnt =
      Array.isArray(first_point) && first_point.length === 2
        ? first_point
        : false,
    scpnt =
      Array.isArray(second_point) && second_point.length === 2
        ? second_point
        : false,
    trpnt =
      Array.isArray(third_point) && third_point.length === 2
        ? third_point
        : false,
    frpnt =
      Array.isArray(fourth_point) && fourth_point.length === 2
        ? fourth_point
        : false;

  if (
    fspnt !== false &&
    scpnt !== false &&
    trpnt !== false &&
    frpnt !== false
  ) {
    let d = {
      x1: fspnt[0],
      y1: fspnt[1],
      x2: scpnt[0],
      y2: scpnt[1],
      x3: trpnt[0],
      y3: trpnt[1],
      x4: frpnt[0],
      y4: frpnt[1],
    };
    let area = Math.abs(
      0.5 *
        (d.x1 * d.y2 -
          d.x2 * d.y1 +
          d.x2 * d.y3 -
          d.x3 * d.y2 +
          d.x3 * d.y4 -
          d.x4 * d.y3 +
          d.x4 * d.y1 -
          d.x1 * d.y4)
    );
    return handelar.record(
      area,
      { first_point, second_point, third_point, fourth_point },
      "quadArea"
    );
  } else {
    if (fspnt === false) {
      handelar.error(
        "an array contains 2 numbers[x,y]",
        "first_point",
        "quadangleArea()"
      );
    } else if (scpnt === false) {
      handelar.error(
        "an array contains 2 numbers[x,y]",
        "second_point",
        "quadangleArea()"
      );
    } else if (trpnt === false) {
      handelar.error(
        "an array contains 2 numbers[x,y]",
        "third_point",
        "quadangleArea()"
      );
    } else if (frpnt === false) {
      handelar.error(
        "an array contains 2 numbers[x,y]",
        "fourth_point",
        "quadangleArea()"
      );
    } else {
      console.error("Something went wrong in quadArea()");
    }
  }
};
handelarX.quadLines = function (
  first_point = [0, 0],
  second_point = [0, 0],
  third_point = [0, 0],
  fourth_point = [0, 0]
) {
  let fspnt =
      Array.isArray(first_point) && first_point.length === 2
        ? first_point
        : false,
    scpnt =
      Array.isArray(second_point) && second_point.length === 2
        ? second_point
        : false,
    trpnt =
      Array.isArray(third_point) && third_point.length === 2
        ? third_point
        : false,
    frpnt =
      Array.isArray(fourth_point) && fourth_point.length === 2
        ? fourth_point
        : false;

  if (
    fspnt !== false &&
    scpnt !== false &&
    trpnt !== false &&
    frpnt !== false
  ) {
    let d = {
      x1: fspnt[0],
      y1: fspnt[1],
      x2: scpnt[0],
      y2: scpnt[1],
      x3: trpnt[0],
      y3: trpnt[1],
      x4: frpnt[0],
      y4: frpnt[1],
    };
    let line_a = handelarX.lineWidth([d.x1, d.y1], [d.x2, d.y2]),
      line_b = handelarX.lineWidth([d.x2, d.y2], [d.x3, d.y3]),
      line_c = handelarX.lineWidth([d.x3, d.y3], [d.x4, d.y4]),
      line_d = handelarX.lineWidth([d.x4, d.y4], [d.x1, d.y1]);
    let result = {
      line_a,
      line_b,
      line_c,
      line_d,
    };
    return handelar.record(
      result,
      { first_point, second_point, third_point, fourth_point },
      "quadLines"
    );
  } else {
    if (fspnt === false) {
      handelar.error(
        "an array contains 2 numbers[x,y]",
        "first_point",
        "quadLines"
      );
    } else if (scpnt === false) {
      handelar.error(
        "an array contains 2 numbers[x,y]",
        "second_point",
        "quadLines"
      );
    } else if (trpnt === false) {
      handelar.error(
        "an array contains 2 numbers[x,y]",
        "third_point",
        "quadLines"
      );
    } else if (frpnt === false) {
      handelar.error(
        "an array contains 2 numbers[x,y]",
        "fourth_point",
        "quadLines"
      );
    } else {
      console.error("Something went wrong in quadLines");
    }
  }
};
handelarX.quadAngles = function (
  first_point = [0, 0],
  second_point = [0, 0],
  third_point = [0, 0],
  fourth_point = [0, 0]
) {
  let fspnt =
      Array.isArray(first_point) && first_point.length === 2
        ? first_point
        : false,
    scpnt =
      Array.isArray(second_point) && second_point.length === 2
        ? second_point
        : false,
    trpnt =
      Array.isArray(third_point) && third_point.length === 2
        ? third_point
        : false,
    frpnt =
      Array.isArray(fourth_point) && fourth_point.length === 2
        ? fourth_point
        : false;

  if (
    fspnt !== false &&
    scpnt !== false &&
    trpnt !== false &&
    frpnt !== false
  ) {
    let tri1 = handelarX.tringleAngles(fspnt, scpnt, frpnt),
      tri2 = handelarX.tringleAngles(scpnt, trpnt, frpnt);
    let obj = { ...handelarX.quadLines(fspnt, scpnt, trpnt, frpnt) };
    obj.area = handelarX.quadArea(fspnt, scpnt, trpnt, frpnt);
    obj.thetaB = tri1.thetaB + tri2.thetaA;
    obj.thetaD = tri1.thetaC + tri2.thetaC;
    obj.thetaA = tri1.thetaA;
    obj.thetaC = tri2.thetaB;
    let result = {
      thetaA: obj.thetaA,
      thetaB: obj.thetaB,
      thetaC: obj.thetaC,
      thetaD: obj.thetaD,
    };
    return handelar.record(
      result,
      { first_point, second_point, third_point, fourth_point },
      "quadAngles"
    );
  } else {
    if (fspnt === false) {
      handelar.error(
        "an array contains 2 numbers[x,y]",
        "first_point",
        "quadAngles"
      );
    } else if (scpnt === false) {
      handelar.error(
        "an array contains 2 numbers[x,y]",
        "second_point",
        "quadAngles"
      );
    } else if (trpnt === false) {
      handelar.error(
        "an array contains 2 numbers[x,y]",
        "third_point",
        "quadAngles"
      );
    } else if (frpnt === false) {
      handelar.error(
        "an array contains 2 numbers[x,y]",
        "fourth_point",
        "quadAngles"
      );
    } else {
      console.error("Something went wrong in quadAngles");
    }
  }
};
handelarX.quadCorners = function (
  first_point = [0, 0],
  second_point = [0, 0],
  third_point = [0, 0],
  fourth_point = [0, 0]
) {
  let fspnt =
      Array.isArray(first_point) && first_point.length === 2
        ? first_point
        : false,
    scpnt =
      Array.isArray(second_point) && second_point.length === 2
        ? second_point
        : false,
    trpnt =
      Array.isArray(third_point) && third_point.length === 2
        ? third_point
        : false,
    frpnt =
      Array.isArray(fourth_point) && fourth_point.length === 2
        ? fourth_point
        : false;

  if (
    fspnt !== false &&
    scpnt !== false &&
    trpnt !== false &&
    frpnt !== false
  ) {
    let corner_ac = handelarX.lineWidth(fspnt, trpnt),
      corner_bd = handelarX.lineWidth(scpnt, frpnt);
    let d = {
      x1: fspnt[0],
      y1: fspnt[1],
      x2: scpnt[0],
      y2: scpnt[1],
      x3: trpnt[0],
      y3: trpnt[1],
      x4: frpnt[0],
      y4: frpnt[1],
    };
    let f = {
      x1: d.x1,
      y1: d.y1,
      x2: d.x3,
      y2: d.y3,
    };
    let s = {
      x1: d.x2,
      y1: d.y2,
      x2: d.x4,
      y2: d.y4,
    };
    crossPoint = linearEq(
      [f.y1 - f.y2, f.x2 - f.x1, f.x2 * f.y1 - f.x1 * f.y2],
      [s.y1 - s.y2, s.x2 - s.x1, s.x2 * s.y1 - s.x1 * s.y2]
    );
    let result = {
      corner_ac,
      corner_bd,
      crossPoint,
    };
    return handelar.record(
      result,
      { first_point, second_point, third_point, fourth_point },
      "quadCorners"
    );
  } else {
    if (fspnt === false) {
      handelar.error(
        "an array contains 2 numbers[x,y]",
        "first_point",
        "quadangleArea()"
      );
    } else if (scpnt === false) {
      handelar.error(
        "an array contains 2 numbers[x,y]",
        "second_point",
        "quadangleArea()"
      );
    } else if (trpnt === false) {
      handelar.error(
        "an array contains 2 numbers[x,y]",
        "third_point",
        "quadangleArea()"
      );
    } else if (frpnt === false) {
      handelar.error(
        "an array contains 2 numbers[x,y]",
        "fourth_point",
        "quadangleArea()"
      );
    } else {
      console.error("Something went wrong in quadangleArea()");
    }
  }
};
handelarX.quad = function (
  first_point = [0, 0],
  second_point = [0, 0],
  third_point = [0, 0],
  fourth_point = [0, 0]
) {
  let fspnt =
      Array.isArray(first_point) && first_point.length === 2
        ? first_point
        : false,
    scpnt =
      Array.isArray(second_point) && second_point.length === 2
        ? second_point
        : false,
    trpnt =
      Array.isArray(third_point) && third_point.length === 2
        ? third_point
        : false,
    frpnt =
      Array.isArray(fourth_point) && fourth_point.length === 2
        ? fourth_point
        : false;

  if (
    fspnt !== false &&
    scpnt !== false &&
    trpnt !== false &&
    frpnt !== false
  ) {
    let obj = {
      ...handelarX.quadLines(fspnt, scpnt, trpnt, frpnt),
      ...handelarX.quadAngles(fspnt, scpnt, trpnt, frpnt),
      ...handelarX.quadCorners(fspnt, scpnt, trpnt, frpnt),
    };
    obj.area = handelarX.quadArea(fspnt, scpnt, trpnt, frpnt);
    return handelar.record(
      obj,
      { first_point, second_point, third_point, fourth_point },
      "quad"
    );
  } else {
    if (fspnt === false) {
      handelar.error(
        "an array contains 2 numbers[x,y]",
        "first_point",
        "quadLines()"
      );
    } else if (scpnt === false) {
      handelar.error(
        "an array contains 2 numbers[x,y]",
        "second_point",
        "quadLines()"
      );
    } else if (trpnt === false) {
      handelar.error(
        "an array contains 2 numbers[x,y]",
        "third_point",
        "quadLines()"
      );
    } else if (frpnt === false) {
      handelar.error(
        "an array contains 2 numbers[x,y]",
        "fourth_point",
        "quadLines()"
      );
    } else {
      console.error("Something went wrong in quadLines()");
    }
  }
};
handelarX.polyArea = function (...dots) {
  let n = dots.length >= 3 ? dots : false;
  var d = {};
  var fresult,
    result = 0;
  for (let i = 0; i < n.length; i++) {
    if (n !== false && Array.isArray(n[i]) && n[i].length === 2) {
      d[`x${i + 1}`] = typeof n[i][0] === "number" ? n[i][0] : false;
      d[`y${i + 1}`] = typeof n[i][1] === "number" ? n[i][1] : false;
    } else {
      if (n === false) {
        throw SyntaxError(
          "An unexpected end of input : enter at least 3 dots hare"
        );
      } else if (!Array.isArray(n[i])) {
        handelarX.error(
          "an array contains 2 values [x,y]",
          `${i + 1}th dot (array[x,y])`,
          "multiangelarea()"
        );
      } else {
        throw TypeError(`enter 2 values in ${i + 1} no. array`);
      }
    }
  }
  for (let i = 1; i <= n.length; i++) {
    if (i < n.length) {
      result += d[`x${i}`] * d[`y${i + 1}`] - d[`x${i + 1}`] * d[`y${i}`];
    } else if (i === n.length) {
      result += d[`x${i}`] * d[`y${1}`] - d[`x${1}`] * d[`y${i}`];
    } else {
      console.error("Something went wrong in polyArea()");
    }
  }
  fresult = Math.abs(0.5 * result);
  return handelar.record(fresult, { ...dots }, "polyArea");
};

//export and share
module.exports = handelarX;
