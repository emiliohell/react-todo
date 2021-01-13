import React from 'react'
import Todo from '../Todo'
import { useSelector } from 'react-redux'
import { selectTodo } from '../../redux/todoSlice'

const TodoList = () => {
    const todos = useSelector(selectTodo)

    return <div>
        {todos.todos.map((value, index) =>
            <Todo
                key={value.id}
                value={value}
                index={index}
            />
        )}
    </div>
}

export default TodoList