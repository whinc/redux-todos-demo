import {combineReducers} from 'redux'

// function todoApp(state = {}, action) {
//   return {
//     todos: todos(state.todos, action),
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action)
//   };
// }

function todos(state = [], action) {
  switch (action.type) {
  case 'ADD_TODO':
    return state.concat([{ text: action.text, completed: false }]);
  case 'TOGGLE_TODO':
    return state.map((todo, index) =>
      action.index === index ?
        { text: todo.text, completed: !todo.completed } :
        todo
   )
  case 'REMOVE_TODO':
   const newState = [...state]
   newState.splice(action.index, 1)
   return newState
  default:
    return state;
  }
}

function visibilityFilter(state = 'SHOW_ALL', action) {
  if (action.type === 'SET_VISIBILITY_FILTER') {
    return action.filter;
  } else {
    return state;
  }
}

function newText (state = '', action) {
  if (action.type === 'CHANGE_NEW_TEXT') {
    return action.newText
  } else {
    return state
  }
}

export default combineReducers({ todos, visibilityFilter, newText })