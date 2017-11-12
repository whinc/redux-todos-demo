import React from 'react'
import {connect} from 'react-redux'
import './Todo.css'
import * as actions from './actions'

class Todo extends React.Component {

  render () {
    const {
      todos,
      visibilityFilter,
      addTodo,
      removeTodo,
      toggleTodo,
      setVisibilityFilter,
      newText,
      changeNewText
    } = this.props

    return (
      <div className='Todo'>
        <div>
          <h1>Todos ({todos.length})</h1>
          <select value={visibilityFilter} onChange={event => setVisibilityFilter(event.target.value)}>
            <option value="SHOW_ALL">All</option>
            <option value="SHOW_COMPLETED">Completed</option>
            <option value="SHOW_UNCOMPLETED">Uncompleted</option>
          </select>
        </div>
        {todos.filter(todo => {
          if (visibilityFilter === 'SHOW_COMPLETED') return todo.completed === true
          else if (visibilityFilter === 'SHOW_UNCOMPLETED') return todo.completed === false
          else return true
        }).map((todo, index) =>
          <div key={index} className='Todo__item'>
            <span className={`Todo__item-text ${todo.completed ? 'Todo__item-text--completed' : ''}`}>
              {todo.text}
            </span>
            <div>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(index)}
              />
              <a onClick={event => removeTodo(index)} href='#' style={{marginLeft: 5}}>X</a>
            </div>
          </div>
        )}
        <div className='Todo__item Todo__item--new'>
          <input
            className='Todo__input'
            type="text"
            placeholder='write your todo here'
            value={newText}
            onChange={event => changeNewText(event.target.value)}
          />
          <button onClick={() => {addTodo(newText); changeNewText('')}}>Add</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    visibilityFilter: state.visibilityFilter,
    newText: state.newText,
    visibilityFilter: state.visibilityFilter
  }
}
const mapDispatchToProps = ({...actions})

export default connect(mapStateToProps, mapDispatchToProps)(Todo)