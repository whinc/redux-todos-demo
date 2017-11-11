
// 新增一个 TODO
export conost addTodo = text => ({
  type: 'ADD_TODO',
  text
})

// 切换一个 TODO 的完成状态
export const toggleTodo = index => ({
  type: 'TOGGLE_TODO',
  index
})

// 显示所有状态（完成和未完成）的 TODO
export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})
