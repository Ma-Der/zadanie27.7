import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import {app} from './reducer.js';
import {addComment} from './action.js';

const store = createStore(app);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

store.dispatch(addComment('pierwszy'));
store.dispatch(addComment('drugi'));

serviceWorker.unregister();
