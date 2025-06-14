const printCompareNumbers = (
  firstValueInput: number,
  secondValueInput: number,
): void => {
  if (firstValueInput > secondValueInput) {
    console.log("BIGGER");
  } else if (firstValueInput < secondValueInput) {
    console.log("LOWER");
  } else {
    console.log("you decide");
  }
};
