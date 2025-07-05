import type { Person } from './people-interface';

export const movePerson = (person: Person, newCity: string): Person => {
  return { ...person, city: newCity };
};
