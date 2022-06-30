import React, { useContext } from 'react'
import { GlobalContext } from '../App'

export default function Display() {
  const {state} = useContext(GlobalContext)

  return <div className="display">
    <h2>Display</h2>
    <p>Height: {state.height}</p>
    <p>Width: {state.width}</p>
  </div>
}
