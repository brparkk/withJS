const getTodoCount = (todos) => {
  const notCompleted = todos.filter((todo) => !todo.completed);
  const { length } = notCompleted;

  return `
  ${length} Items Left.
  `;
};

export default (targetElement, { todos }) => {
  const counterElement = targetElement.cloneNode(true);
  counterElement.textContent = getTodoCount(todos);
  return counterElement;
};
