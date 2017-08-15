
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import App from './App';
import reducers from './reducers';
import './index.css';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.getElementById('root'));


//ReduxPromise is a middleware. Middleware have the ability to stop or manipulate actions before they hit any reducer whatsoever. If the payload received from the get request is a promise, ReduxPromise stops the action and waits for the promise to finish, and then dispatches the action with the payload of the resolved request (the data itself, instead of a promise)
