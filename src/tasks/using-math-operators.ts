import {
  addNumbers,
  divideNumbers,
  multiplyNumbers,
  substractNumbers,
} from './math-operators';

const solveEquation = (a: number, b: number, c: number) => {
  const equationOne = substractNumbers(addNumbers(a, b), c);
  const equationTwo = b !== 0 ? multiplyNumbers(divideNumbers(a, b), c) : NaN;
  const equationThree = multiplyNumbers(substractNumbers(a, b), c);

  console.log(equationOne);
  console.log(equationTwo);
  console.log(equationThree);

  return { equationOne, equationTwo, equationThree };
};
console.log(solveEquation(1, 2, 3));
export { solveEquation };
