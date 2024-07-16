let registry = {};

/**
 * 최초 DOM 요소에서 렌더링을 시작하려면
 * 어플리케이션 root를 렌더하는 메소드를 제공해야 한다. -> renderRoot
 * root
 * @param {*} root
 * @param {*} state
 * @returns
 */
const renderRoot = (root, state) => {
  const cloneElement = (root) => root.cloneNode(true);
  return renderWrapper(cloneElement)(root, state);
};

const add = (name, component) => {
  registry[name] = renderWrapper(component);
};

const renderWrapper = (component) => {
  return (targetElement, state) => {
    const element = component(targetElement, state);
    const childComponents = element.querySelectorAll("[data-component]");

    Array.from(childComponents).map((target) => {
      if (!target) {
        return;
      }
      const name = target.dataset.component;

      const child = registry[name];
      target.replaceWith(child(target, state));
    });
  };
};

return {
  add,
  renderRoot,
};
