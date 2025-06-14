const printWeekdayName = (inputWeekDay: number): number => {
  switch (inputWeekDay) {
    case 0:
      console.log("Monday");
      return 0;
    case 1:
      console.log("Tuesday");
      return 1;
    case 2:
      console.log("Wednesday");
      return 2;
    case 3:
      console.log("Thursday");
      return 3;
    case 4:
      console.log("Friday");
      return 4;
    case 5:
      console.log("Saturday");
      return 5;
    case 6:
      console.log("Sunday");
      return 6;
    default:
      console.log("Unknown Day");
      return -1;
  }
};
