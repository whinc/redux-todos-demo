import React from 'react'
import {connect} from 'react-redux'
import './Todo.css'

class Todo extends React.Component {

  onCheckStateChanged = (event) => {
  }

  render () {
    return (
      <div className='Todo'>
        <h1>Todos</h1>
        <div className='Todo__item'>
         <span>title</span> 
         <input type="checkbox" checked={true} onChange={this.onCheckStateChanged}/>
        </div>
        <div className='Todo__item'>
         <span>title</span> 
         <input type="checkbox" name="ok" id=""/>
        </div>
      </div>
    )
  }
}

export default connect((state) => {
  return {
    todos: state.todos || [],
    visibilityFilter: state.visibilityFilter || 'SHOW_COMPLETED'
  }
})(Todo)