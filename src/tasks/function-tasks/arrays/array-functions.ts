// Task 1: Combine two arrays.
const combineArrays = <T>(arr1: T[], arr2: T[]): T[] => {
  return [...arr1, ...arr2];
};

// Task 2: Change out the last item in the array (without mutating original)
const replaceLastItem = (arr: any[], newItem: any): any[] => {
  arr.pop();
  arr.push(newItem);
  return arr;
};

// Task 3: Print the length of the array, add an item, print the length again.
const printLengthBeforeAndAfter = (arr: any[], newItem: any): any[] => {
  console.log('Length before:', arr.length);
  arr.push(newItem);
  console.log('Length after:', arr.length);
  return arr;
};

// Task 4: Flatten arrays with generics and type safety
const flattenArray = (input: any[]): any[] => {
  return input.flat(Infinity);
};

// Task 5: Where did I put that again?
const findItemPosition = <T>(arr: T[], item: T): number => {
  return arr.indexOf(item);
};
