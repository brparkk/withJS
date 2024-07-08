// todo list 만들기
const getTodoElement = (todo) => {
  const { title, completed } = todo;
  return `
    <li ${completed ? "class='completed'" : ""}>
      <div class="view">
        <input type="checkbox" ${
          completed ? "class='checked'" : ""
        } class="toggle"/>
        <label>${title}</label>
        <button class="delete">x</button>
      </div>
      <input class="edit" value="${title}"/>
    </li>
  `;
};

// 완료되지 않은 todo 수 count 하기
const getTodoCount = (todos) => {
  const count = todos.filter((todo) => !todo.completed).length;
  return `
  ${count} Items Left.
  `;
};

// selected 클래스를 추가한 필터 유형을 가진 링크
export default (targetElement, state) => {
  const { currentFilter, todos } = state;

  const $el = targetElement.cloneNode(true);

  const $list = $el.querySelector(".todo-list");
  const $count = $el.querySelector(".todo-count");
  const $filters = $el.querySelector(".filters");

  $list.innerHTML = todos.map(getTodoElement).join("");
  $count.textContent = getTodoCount(todos);

  Array.from($filters.querySelectorAll("li a")).forEach((a) => {
    if (a.textContent === currentFilter) {
      a.classList.add("selected");
    } else {
      a.classList.remove("selected");
    }
  });

  return $el;
};
