const fixedMiddleText: string = "Love";

const injectStrings = (userInputPrefixText: string, userInputSuffixText: string): void => {
    const resultInjectStrings = [userInputPrefixText, fixedMiddleText, userInputSuffixText].join(" ");
    console.log(resultInjectStrings);
};