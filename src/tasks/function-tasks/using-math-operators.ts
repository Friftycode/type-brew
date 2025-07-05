import {
  addNumbers,
  divideNumbers,
  multiplyNumbers,
  subtractNumbers,
} from './math-operators';

// Equation One: a + b - c
const calculateEquationOne = (a: number, b: number, c: number): number => {
  const resultEquationOne = subtractNumbers(addNumbers(a, b), c);
  console.log(resultEquationOne);
  return resultEquationOne;
};

// Equation Two: a / b * c. Divided by zero check is handled in the divideNumbers function in math-operators.ts
const calculateEquationTwo = (a: number, b: number, c: number): number => {
  const resultEquationTwo = multiplyNumbers(divideNumbers(a, b), c);
  console.log(resultEquationTwo);
  return resultEquationTwo;
};

// Equation Three: (a - b) * c
const calculateEquationThree = (a: number, b: number, c: number): number => {
  const resultEquationThree = multiplyNumbers(subtractNumbers(a, b), c);
  console.log(resultEquationThree);
  return resultEquationThree;
};
