const repeatTheStrings = (
  strings: string[],
  times: number[]
): (string | number)[] => {
  const minLength = Math.min(strings.length, times.length);
  for (let i = 0; i < minLength; i++) {
    for (let j = 0; j < times[i]; j++) {
      console.log(strings[i]);
    }
  }
  if (strings.length > times.length) {
    return strings.slice(times.length);
  } else if (times.length > strings.length) {
    return times.slice(strings.length);
  }
  return [];
};

export { repeatTheStrings };
