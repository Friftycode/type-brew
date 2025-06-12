const fixedMiddleText: string = "Love";

const injectStrings = (
  userInputPrefixText: string,
  userInputSuffixText: string,
): void => {
  const resultInjectStrings = [
    userInputSuffixText,
    fixedMiddleText,
    userInputPrefixText,
  ].join(" ");
  console.log(resultInjectStrings);
};
