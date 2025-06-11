const additionNumbers = (value1: number, value2: number): number => {
    return value1 + value2;
}

const substractionNumbers = (value1: number, value2: number): number => {
    return value1 - value2;
}

const multiplicationNumbers = (value1: number, value2: number): number => {
    return value1 * value2;
}

const divisionNumbers = (value1: number, value2: number): number => {
    if (value2 === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return value1 / value2;
}