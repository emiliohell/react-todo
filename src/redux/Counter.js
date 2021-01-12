import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    decrement,
    increment,
    // incrementByAmount,
    // incrementAsync,
    selectCount
} from './counterSlice'

export function Counter() {
    const count = useSelector(selectCount)
    const dispatch = useDispatch()
    // const [incrementAmount, setIncrementAmout] = React.useState('2')

    return (
        <div>
            <div>
                <button
                    onClick={() => dispatch(increment())}
                >+</button>
                <h1>{count}</h1>
                <button
                    onClick={() => dispatch(decrement())}
                >-</button>
            </div>
        </div>
    )
}