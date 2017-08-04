import React from 'react';
import { render } from 'react-dom';

const elements = Array.from(document.querySelectorAll('div[data-component]'));

elements.forEach((element) => {
  async function loadComponent() {
    const componentName = element.getAttribute('data-component');
    const module = await import(`./components/${componentName}`);
    return module.default;
  }

  return loadComponent().then(Component => render(<Component />, element));
});
