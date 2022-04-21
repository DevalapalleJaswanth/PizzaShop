import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import { createStore } from 'redux';
import rootReducer from './Reducers';
import { Provider } from 'react-redux';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
