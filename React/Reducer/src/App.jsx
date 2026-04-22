import React from 'react'
import AppRouter from './Components/AppRouter'
import CounterContextProvider from './Components/CounterContextProvider'

const App = () => {
  return (
    <CounterContextProvider>
      <AppRouter />
    </CounterContextProvider>
  )
}

export default App
