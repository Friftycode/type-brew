import returnCompareNumbers from './compare-numbers';

// Task 6: part 1
const partOneChangeUpNumbers = (first: number, second: number): number => {
  const updatedFirst = first + 5;
  const comparison = returnCompareNumbers(updatedFirst, second);
  return comparison === 'BIGGER' ? updatedFirst : second;
};

// Task 6: part 2
const partTwoChangeUpNumbers = (first: number, second: number): number => {
  while (returnCompareNumbers(first, second) !== 'BIGGER') {
    first += 2;
  }
  return first;
};
