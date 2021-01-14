import React from 'react'
// import TestButton from '../../components/TestButton'

const TodoPage = () => {
    const [todo, setTodo] = React.useState('')
    const [todoList, setTodoList] = React.useState([])

    const handleAddButton = () => {
        setTodoList(todoList.concat(todo))
        setTodo('')
    }

    const handleTodoInput = (e) => {
        setTodo(e.target.value)
    }

    return <div>
        {/* <TestButton consoleLog={todoList} /> */}
        <h1>Hello Todo Page!</h1>
        <input onChange={handleTodoInput} value={todo} ></input>
        <button onClick={handleAddButton}>Add</button>
        {/* <h1>{todo}</h1> */}
        {todoList.map((todo, index) => <h1 key={index}>{todo}</h1>)}
    </div>
}

export default TodoPage