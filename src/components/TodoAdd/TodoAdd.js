import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../redux/todoSlice'

const TodoAdd = () => {
    const [todo, setTodo] = React.useState('')
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

    return <div>
        <input onChange={handleTodoInput} value={todo} />
        <button onClick={handleAdd}>Add</button>
    </div>
}

export default TodoAdd