import React from 'react'
// import Todo from '../components/Todo'
// import TodoList from '../components/TodoList'
// import TodoAdd from '../components/TodoAdd'
// import {
// useSelector, 
// useDispatch
// } from 'react-redux'
// import {
// addTodo,
// selectTodo,
// } from './todoSlice'

// import TestButton from '../components/TestButton'

export function Todos() {
    // const [todo, setTodo] = React.useState('')
    // const todos = useSelector(selectTodo)
    // const dispatch = useDispatch()

    // const handleTodoInput = (e) => {
    //     setTodo(e.target.value)
    // }

    // const handleAdd = () => {
    //     dispatch(addTodo({
    //         id: Date.now(),
    //         text: todo,
    //         done: false,
    //         date: new Date(Date.now()).toString(),
    //         edit: false,
    //     }))
    //     setTodo('')
    // }

    return (
        <div>
            {/* <TestButton consoleLog={todos.todos} /> */}
            <h1>Hello Todo With Redux Page!</h1>
            {/* <div>
                <input onChange={handleTodoInput} value={todo} />
                <button onClick={handleAdd}>Add</button>
            </div> */}
            {/* <TodoAdd />
            <TodoList /> */}
            {/* {todos.todos.map((value, index) =>
                <Todo
                    key={value.id}
                    value={value}
                    index={index} />
            )} */}
        </div>
    )
}


// Do todos as individual components
// Do Add todo as an individual component
// Do a todo List as an individual component
// Remove Counter and move Components to the right folder