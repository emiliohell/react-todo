import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'

export default configureStore({
    reducer: {
        counter: counterReducer
    }
})

// import todosReducer from '../features/todos/todosSlice'

// export default configureStore({
//     reducer: {
//         todos: todosReducer
//     }
// })