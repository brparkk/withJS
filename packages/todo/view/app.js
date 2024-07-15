import todosView from "./todos";
import counterView from "./counter";
import filtersView from "./filters";

// registry의 키는 data-component 속성 값과 일치한다.
// 컴포넌트 기반 렌더링 엔진의 핵심 메커니즘이다.
const registry = {
  todos: todosView,
  counter: counterView,
  filters: filtersView,
};
// 루트 컨테이너(appView) 뿐만 아니라, 모든 컴포넌트에 적용되어야 한다.

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
