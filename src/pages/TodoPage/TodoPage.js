import React from 'react'
import TodoList from '../../components/TodoList'
import TodoAdd from '../../components/TodoAdd'

const TodoPage = () => {
    return <div data-testid="TodoPageDiv">
        <h1>Hello Todo With Redux Page!</h1>
        <TodoAdd />
        <TodoList />
    </div>
}

export default TodoPage