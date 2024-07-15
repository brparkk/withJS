import getTodos from "./data/getTodo";
import appView from "./view/app";

const state = {
  todos: getTodos(),
  currentFilter: "All",
};

const main = document.querySelector(".todoapp");

window.requestAnimationFrame(() => {
  const newMain = appView(main, state);
  main.replaceWith(newMain);
});