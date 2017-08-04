import React from 'react';
import { render } from 'react-dom';

const routes = {
  async index() {
    return import(/* webpackChunkName: "index" */ './routes/index');
  },
  async search() {
    return import(/* webpackChunkName: "search" */ './routes/search');
  },
};

const elements = Array.from(document.querySelectorAll('div[data-component]'));

let pathname = location.pathname.substring(1);
pathname = pathname || 'index';

routes[pathname]().then(components =>
  elements.forEach((element) => {
    const Component = components.default[element.getAttribute('data-component')];
    render(<Component />, element);
  }));
