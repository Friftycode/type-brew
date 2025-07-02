import type { Person } from './people-interface';

export interface Child extends Person {
  school: string;
}

export interface Adult extends Person {
  jobTitle: string;
}

export const createChild = (person: Person, school: string): Child => {
  return { ...person, school };
};

export const createAdult = (person: Person, jobTitle: string): Adult => {
  return { ...person, jobTitle };
};
