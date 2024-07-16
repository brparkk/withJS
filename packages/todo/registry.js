let registry = {};

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
