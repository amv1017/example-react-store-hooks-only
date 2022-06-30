import React, { createContext, useReducer } from 'react'
import Container from './components/Container'
import { reducer } from './store/store'
import './App.css'

export const GlobalContext = createContext({})

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    height: 2,
    width: 3,
  })

  return (
    <GlobalContext.Provider value={{state, dispatch}}>
      <div className='app'>
        <Container />
      </div>
    </GlobalContext.Provider>
  )
}

export default App
