// Task 1: Combine two arrays.
const taskOneCombineArrays = <T>(arr1: T[], arr2: T[]): T[] => {
  return [...arr1, ...arr2];
};

// Task 2: Change out the last item in the array
const taskTwoReplaceLastItem = <T>(arr: T[], newItem: T): T[] => {
  arr.pop();
  arr.push(newItem);
  return arr;
};

// Task 3: Print the length of the array, add an item, print the length again.
const taskThreePrintLengthBeforeAndAfter = <T>(arr: T[], newItem: T): void => {
  console.log("Length before:", arr.length);
  arr.push(newItem);
  console.log("Length after:", arr.length);
};

// Task 4: Flatten arrays
const taskFourFlattenArray = (input: any[]): any[] => {
  return input.flat(Infinity);
};

// Task 5: Where did I put that again?
const taskFiveFindItemPosition = <T>(arr: T[], item: T): number => {
  return arr.indexOf(item);
};
