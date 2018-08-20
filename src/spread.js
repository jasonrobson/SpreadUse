import React from "react";

const doMath = (numberOne, numberTwo, numberThree) => {
  return numberOne + numberTwo + numberThree;
};

//line 8 = rest
export const sumNumbersWithTen = (...params) => {
  return doMath(10, ...params); //spread
};

export const sumArrayNumbersWithTen = param => {
  return doMath(...param);
};
