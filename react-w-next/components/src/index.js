import React from 'react';
import ReactDOM from 'react-dom';
import './styles/tailwind.css';
import Primary from './components/Buttons/primary';

const mount = (el) => {
  ReactDOM.render(<Primary />, el);
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('component-host');

  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
