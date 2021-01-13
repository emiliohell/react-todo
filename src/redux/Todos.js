import React from 'react'
import TestButton from '../components/TestButton'
import { useSelector, useDispatch } from 'react-redux'
import {
    addTodo,
    deleteTodo,
    selectTodo,
} from './todoSlice'

export function Todos() {
    const [todo, setTodo] = React.useState()
    const todos = useSelector(selectTodo)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Hello Todo With Redux Page!</h1>

            <div>
                <input onChange={(e) => setTodo(e.target.value)} />
                <TestButton consoleLog={todos.todos} />
                <button
                    onClick={() => dispatch(addTodo({
                        id: Date.now(),
                        text: todo,
                        done: false,
                        date: new Date(Date.now()).toString()
                    }))}
                >Add</button>
                <button onClick={() => dispatch(deleteTodo())}>Delete</button>
            </div>
            <div>
                {todos.todos.map(({ text }, index) => <h1 key={index}>{text}</h1>)}
            </div>
        </div>
    )
}