import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, change } from '../RTK/counterSlice'

const Test = () => {
    const count = useSelector((state) => state.counter.count)
    const name = useSelector((state) => state.counter.name)
    const dispatch = useDispatch()
  return (
      <div>
          <h1>Counter: {count}</h1>
          <p>Name: {name}</p>   
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
          <button onClick={() => dispatch(reset())}>Reset</button>
          <button onClick={() => dispatch(change("John"))}>Change Name</button>
      </div>
  )
}
export default Test
