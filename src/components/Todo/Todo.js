import React from 'react'
import styles from './Todo.module.css'
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
    const searchInput = React.useRef(null)
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

    React.useEffect(() => {
        if (value.edit) {
            setTodo(value.text)
            console.log(searchInput.current.focus())
        }
    }, [value])

    return <div className={styles.divTodo}>
        {value.edit ?
            <div className={styles.divEditInput}><input ref={searchInput} onChange={handleTodoInput} placeholder={value.text} value={todo} className={styles.todoEditInput} /></div> :
            <h1 className={styles.todoH1}>{value.text}</h1>
        }
        <button onClick={handleDelete}>Delete</button>
        {value.edit ?
            <button onClick={handleSave}>Save</button> :
            <button onClick={handleEdit}>Edit</button>
        }
    </div>
}

export default Todo