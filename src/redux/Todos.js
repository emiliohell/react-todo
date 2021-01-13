import React from 'react'
import TestButton from '../components/TestButton'
import { useSelector, useDispatch } from 'react-redux'
import {
    addTodo,
    deleteTodo,
    selectTodo,
    saveTodo,
    editTodo,
} from './todoSlice'

export function Todos() {
    const [todo, setTodo] = React.useState('')
    const todos = useSelector(selectTodo)
    const dispatch = useDispatch()

    const handleTodoInput = (e) => {
        setTodo(e.target.value)
    }

    const handleAdd = () => {
        dispatch(addTodo({
            id: Date.now(),
            text: todo,
            done: false,
            date: new Date(Date.now()).toString(),
            edit: false,
        }))
        setTodo('')
    }

    return (
        <div>
            <TestButton consoleLog={todos.todos} />
            <h1>Hello Todo With Redux Page!</h1>
            <div>
                <input onChange={handleTodoInput} value={todo} />
                <button onClick={handleAdd}>Add</button>
            </div>
            <div>
                {todos.todos.map((value, index) =>
                    <div key={value.id}>
                        {value.edit ? <input placeholder={value.text} /> : <h1 key={index}>{value.text}</h1>}
                        <button onClick={() => dispatch(deleteTodo(index))}>Delete</button>
                        <button onClick={() => dispatch(editTodo({ index, value }))}>Edit</button>
                        <button onClick={() => dispatch(saveTodo({ index, value, todo }))}>Save</button>
                    </div>
                )}
            </div>
        </div>
    )
}


// Do todos as individual components
// Do Add todo as an individual component
// Do a todo List as an individual component