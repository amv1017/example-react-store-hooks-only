import React, { useState, createContext } from 'react'
import Container from './components/Container'
import './App.css'

export const GlobalContext = createContext({})

const App = () => {
  const [state, setState] = useState({
    height: 2,
    width: 3,
  })

  return (
    <GlobalContext.Provider value={{state, setState}}>
      <div className='app'>
        <Container />
      </div>
    </GlobalContext.Provider>
  )
}

export default App
