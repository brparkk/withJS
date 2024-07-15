import todosView from "./todos";
import counterView from "./counter";
import filtersView from "./filters";

const registry = {
  todos: todosView,
  counter: counterView,
  filters: filtersView,
};

const renderWrapper = (targetElement, state) => {
  Object.entries(registry).map(([key, renderView]) => {
    const renderElement = targetElement.dataset[key];
    return renderElement.replaceWith(renderView(renderElement, state));
  });
};

export default (targetElement, state) => {
  const element = targetElement.cloneNode(true);
  renderWrapper(element, state);
  return element;
};
