const loveReminders = (value: string | number | boolean): void => {
  if (typeof value === "string") {
    console.log(`I got you, bebbehh!`);
  } else if (typeof value === "number") {
    console.log(
      `I’d travel to the moon and back ${value} times, just to be by your side.`,
    );
  } else if (typeof value === "boolean") {
    console.log(
      value
        ? "I’ll always love you."
        : "Even through the toughest times, I’ll still love you.",
    );
  }
};
