import { createSlice } from '@reduxjs/toolkit'

const initialState = { todos: [] }

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
            // REMEBER THIS IS A MUTABLE ACTION, IT CAN BE USED HERE THANKS TO TOOLKIT REDUX.
            //You can only write "mutating" logic in Redux Toolkit's createSlice and createReducer 
            //because they use Immer inside! If you write mutating logic in reducers without Immer, 
            //it will mutate the state and cause bugs!
        },
        deleteTodo: (state, action) => {
            state.todos.splice(0, 1)
            // state.todos.indexOf(action.payload)
        }
    }
})

export const { addTodo, deleteTodo } = todoSlice.actions

export const selectTodo = state => state.todos;

export default todoSlice.reducer