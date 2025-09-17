import compareNumbers from './compare-numbers';

// Task 6: part 1
const addFiveCompareBigger = (first: number, second: number): number => {
  const updatedFirst = first + 5;
  const comparison = compareNumbers(updatedFirst, second);
  return comparison === 'BIGGER' ? updatedFirst : second;
};

// Task 6: part 2
const addTwoUntilBigger = (first: number, second: number): number => {
  while (compareNumbers(first, second) !== 'BIGGER') {
    first += 2;
  }
  return first;
};
