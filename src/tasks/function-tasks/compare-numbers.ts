const compareNumbers = (
  firstValueInput: number,
  secondValueInput: number
): string => {
  if (firstValueInput > secondValueInput) {
    return 'BIGGER';
  } else if (firstValueInput < secondValueInput) {
    return 'LOWER';
  } else {
    return 'you decide';
  }
};

export default compareNumbers;
