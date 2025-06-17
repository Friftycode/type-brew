import {
  addNumbers,
  divideNumbers,
  multiplyNumbers,
  substractNumbers,
} from './math-operators';

// Equation One: a + b - c
const calculateEquationOne = (a: number, b: number, c: number): number => {
  const returnEquationOne = substractNumbers(addNumbers(a, b), c);
  console.log(returnEquationOne);
  return returnEquationOne;
};

// Equation Two: a / b * c. Divided by zero check is handled in the divideNumbers function in math-operators.ts
const calculateEquationTwo = (a: number, b: number, c: number): number => {
  const returnEquationTwo = multiplyNumbers(divideNumbers(a, b), c);
  console.log(returnEquationTwo);
  return returnEquationTwo;
};

// Equation Three: (a - b) * c
const calculateEquationThree = (a: number, b: number, c: number): number => {
  const returnEquationThree = multiplyNumbers(substractNumbers(a, b), c);
  console.log(returnEquationThree);
  return returnEquationThree;
};
