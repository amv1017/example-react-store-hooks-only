import React, { useContext } from 'react'
import { GlobalContext } from '../App'
import Display from './Display'

export default function Container() {
  const {state, setState} = useContext(GlobalContext)

  const handleChange = (e) => {
    e.preventDefault()
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  }

  return <div className="container">
    <input name="height" value={state.height} type="number" onChange={handleChange} />
    <input name="width" value={state.width} type="number" onChange={handleChange} />
    <Display />
  </div>
}
