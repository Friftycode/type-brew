const injectStrings = (
  userInputPrefixText: string,
  userInputSuffixText: string,
): void => {
  const fixedMiddleText: string = "love";
  const resultInjectStrings = [
    userInputSuffixText,
    fixedMiddleText,
    userInputPrefixText,
  ].join(" ");
  console.log(resultInjectStrings);
};
