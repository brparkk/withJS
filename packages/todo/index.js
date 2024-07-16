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

window.requestAnimationFrame(() => {
  const main = document.querySelector(".todoapp");
  const newMain = registry.renderRoot(main, state);
  main.replaceWith(newMain);
});
