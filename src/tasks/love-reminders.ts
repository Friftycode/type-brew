const printLoveReminders = (value: string | number | boolean): string => {
  if (typeof value === "string") {
    return `I got you, bebbehh!`;
  } else if (typeof value === "number") {
    return `I’d travel to the moon and back ${value} times, just to be by your side.`;
  } else if (typeof value === "boolean") {
    return value
      ? "I’ll always love you."
      : "Even through the toughest times, I’ll still love you.";
  }
  return "No matter what, my love for you is unconditional.";
};
