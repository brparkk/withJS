import { faker } from "@faker-js/faker";

const TODO_LIST = faker.helpers.arrayElement([
  { id: 1, title: "todo1", completed: false },
  { id: 2, title: "todo2", completed: false },
  { id: 3, title: "todo3", completed: false },
]);

export const getTodos = () => {
  return TODO_LIST;
};
