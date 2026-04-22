import React, { createContext, useReducer } from 'react'

export const CounterContext = createContext()

const CounterContextProvider = ({ children }) => {
    function reducer(state, action) {
        switch (action.type) {
            case 'increment':
                return { ...state, count: state.count + 1 }
            case 'decrement':
                return { ...state, count: state.count - 1 }
            case 'changeName':
                return { ...state, name: action.payload }
            default:
                return state
        }
    }

    const [current_state, dispatch] = useReducer(reducer, {
        count: 0,
        name: 'Nick',
    })

  return (
    <CounterContext.Provider value={{ current_state, dispatch }}>
      {children}
    </CounterContext.Provider>
  )
}

export default CounterContextProvider;
