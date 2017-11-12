import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {createLogger} from 'redux-logger'
import Todo, {reducer} from './Todo'
import './index.css';

const initialState = {
  todos: [{
    text: 'plan A',
    completed: true
  }, {
    text: 'plan B',
    completed: false
  }],
  visibilityFilter: 'SHOW_ALL',
  newText: ''
}
const middlewares = [
  createLogger({ diff: true })
]
const store = createStore(reducer, initialState, applyMiddleware(...middlewares))

ReactDOM.render(
  <Provider store={store}>
    <Todo />
  </Provider>
, document.getElementById('root'));
