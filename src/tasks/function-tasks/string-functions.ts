const stringCount = (input: string): number => {
  return input.length;
};

const getMonthValue = (input: string): string => {
  return input.slice(5, 7);
};

const findEandCharAtTwo = (input: string): string => {
  const eIndex = input.indexOf('e');
  const charAtTwo = input.charAt(2);
  return `${eIndex}, ${charAtTwo}`;
};

const convertCase = (inputOne: string, inputTwo: string): string => {
  return `${inputOne.toUpperCase()}${inputTwo.toLowerCase()}`;
};
