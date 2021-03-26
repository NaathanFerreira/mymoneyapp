import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './main/App.jsx';
import reportWebVitals from './reportWebVitals';

import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import { Provider } from 'react-redux'
import multi from 'redux-multi'
import thunk from 'redux-thunk'
import Reducers from './main/Reducers'


import './common/template/dependencies'

// Extensão do chrome
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// middlewares
const store = applyMiddleware(multi, thunk, promise)(createStore)(Reducers, devTools)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
