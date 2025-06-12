const fixedMiddleText: string = "Love";

const injectStrings = (userInputPrefixText: string, userInputSuffixText: string): void => {
    const result = [userInputPrefixText, fixedMiddleText, userInputSuffixText].join(" ");
    console.log(result);
};