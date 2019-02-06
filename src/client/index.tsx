import React from 'react';
import { render, hydrate } from 'react-dom';
import App from './components/App';

const root = document.getElementById('root');

render(<App />, root);

const renderApp = () => {
  hydrate(<App />, root);
};

// This is needed for Hot Module Replacement
if (module.hot) {
  module.hot.accept('./components/App', () => renderApp());
}
