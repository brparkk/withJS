import { faker } from "@faker-js/faker";

const TODO_LIST = faker.helpers.arrayElement([
  { id: 1, title: "todo1", completed: false },
  { id: 2, title: "todo2", completed: false },
  { id: 3, title: "todo3", completed: false },
]);
// todo list 만들기
const getTodoElement = () => {
  const ul = document.querySelector("ul.todo-list");
  TODO_LIST.forEach((todo) => {
    const li = document.createElement("li");
    li.textContent = todo.title;
    ul.appendChild(li);
  });
};

// 완료되지 않은 todo 수 count 하기
const getTodoCount = () => {
  const count = TODO_LIST.filter((todo) => !todo.completed).length;
  return count;
};

// selected 클래스를 추가한 필터 유형을 가진 링크
const getFilterLink = () => {
  const filterLinks = document.querySelectorAll("ul.filters");
  filterLinks.forEach((link, index) => {
    if (TODO_LIST[index].completed) {
      link.classList.add("selected");
    }
  });
};
