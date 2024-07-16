import getTodos from "./data/getTodo";
import registry from "./registry";

import todos from "./view/todos";
import filters from "./view/filters";
import counter from "./view/counter";

const state = {
  todos: getTodos(),
  currentFilter: "All",
};

registry.add("todos", todos);
registry.add("filters", filters);
registry.add("counter", counter);

const render = window.requestAnimationFrame(() => {
  console.count("render");
  const main = document.querySelector(".todoapp");
  const newMain = registry.renderRoot(main, state);
  main.replaceWith(newMain);
});

window.setInterval(() => {
  state.todos = getTodos();
  render();
}, 5000);

render();
