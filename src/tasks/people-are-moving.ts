export const movePerson = (
  person: { name: string; age: number; city: string },
  newCity: string
) => {
  return { ...person, city: newCity };
};
