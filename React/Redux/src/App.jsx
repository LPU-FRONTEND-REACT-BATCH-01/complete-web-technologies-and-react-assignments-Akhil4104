import React from 'react'
import { Provider } from "react-redux"
import store from './RTK/store'
import Test from './Components/Test'
import Products from './Components/Products'


const App = () => {
  return (
    <Provider store={store}>
      <Test />
      <Products />
    </Provider>
  )
}
export default App
