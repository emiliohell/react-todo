import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import todosReducer from './todoSlice'

export default configureStore({
    reducer: {
        counter: counterReducer,
        todos: todosReducer,
    }
})

// import todosReducer from '../features/todos/todosSlice'

// export default configureStore({
//     reducer: {
//         todos: todosReducer
//     }
// })