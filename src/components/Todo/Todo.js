import React from 'react'
import {
    useDispatch,
} from 'react-redux'
import {
    deleteTodo,
    saveTodo,
    editTodo,
} from '../../redux/todoSlice'

const Todo = ({ value, index }) => {
    const [todo, setTodo] = React.useState('')
    const dispatch = useDispatch()

    const handleTodoInput = (e) => {
        setTodo(e.target.value)
    }

    const handleDelete = () => {
        dispatch(deleteTodo(index))
    }

    const handleEdit = () => {
        dispatch(editTodo({ index, value }))
    }

    const handleSave = () => {
        dispatch(saveTodo({ index, value, todo }))
        setTodo('')
    }

    return <div>
        {value.edit ?
            <input onChange={handleTodoInput} placeholder={value.text} value={todo} /> :
            <h1>{value.text}</h1>
        }
        <button onClick={handleDelete}>Delete</button>
        {value.edit ?
            <button onClick={handleSave}>Save</button> :
            <button onClick={handleEdit}>Edit</button>
        }
    </div>
}

export default Todo