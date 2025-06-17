const addNumbers = (value1: number, value2: number): number => {
  return value1 + value2;
};

const substractNumbers = (value1: number, value2: number): number => {
  return value1 - value2;
};

const multiplyNumbers = (value1: number, value2: number): number => {
  return value1 * value2;
};

const divideNumbers = (value1: number, value2: number): number => {
  if (value2 === 0) {
    throw new Error('Division by zero is not allowed.');
  }
  return value1 / value2;
};

// Used in task file: using-math-operators
export { addNumbers, substractNumbers, multiplyNumbers, divideNumbers };
