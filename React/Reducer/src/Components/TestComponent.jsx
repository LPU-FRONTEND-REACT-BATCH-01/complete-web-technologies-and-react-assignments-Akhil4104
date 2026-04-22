import React, { useContext } from 'react'
import { CounterContext } from './CounterContextProvider'

const TestComponent = () => {
  const { current_state, dispatch } = useContext(CounterContext)

  return (
    <div>
      <h1>Counter App</h1>
      <h2>Name: {current_state.name}</h2>
      <h2>Count: {current_state.count}</h2>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'changeName', payload: 'John' })}>
        Change Name
      </button>
    </div>
  )
}

export default TestComponent
