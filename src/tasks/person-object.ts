import type { Person } from './people-interface';

export const createPerson = (
  name: string,
  age: number,
  city: string
): Person => {
  return { name, age, city };
};
