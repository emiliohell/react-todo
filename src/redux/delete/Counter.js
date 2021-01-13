import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    decrement,
    increment,
    incrementByAmount,
    incrementAsync,
    selectCount
} from './counterSlice'

export function Counter() {
    const count = useSelector(selectCount)
    const dispatch = useDispatch()
    const [incrementAmount, setIncrementAmount] = React.useState('2')

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
            <div>
                <input onChange={e => setIncrementAmount(e.target.value)} value={incrementAmount}></input>
                <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))} >Add Amount</button>
                <button onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}>Add Async</button>
            </div>
        </div>
    )
}