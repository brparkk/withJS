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

export default (targetElement, { todos }) => {
  const newTodoList = targetElement.cloneNode(true);
  const todosElements = todos.map(getTodoElement).join("");
  newTodoList.innerHTML = todosElements;
  return newTodoList;
};
