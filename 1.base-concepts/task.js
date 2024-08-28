"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  let x1, x2;
  if (d > 0) {
    x1 = (-b + Math.sqrt(d)) / (2 * a);
    x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr = [x1, x2];
  } else if (d === 0) {
    x1 = -b / (2 * a);
    arr = [x1];
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = percent / 100 / 12;
  let loanBody = amount - contribution;
  let payment =
    loanBody * (percent + percent / ((1 + percent) ** countMonths - 1));
  let totalAmount = payment * countMonths;
  return parseFloat(totalAmount.toFixed(2));
}
