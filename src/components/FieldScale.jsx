import React from 'react'
import plus from '../plus.svg'
import minus from '../minus.svg'

export default function FieldScale({ title, value, onInc, onDec }) {
  return <div className="field">
    <div>{title}</div>
    <h4>{value}</h4>
    <div className="buttons">
      <button onClick={onInc}>
        <img src={plus} />
      </button>
      <button onClick={onDec}>
        <img src={minus} />
      </button>
    </div>
  </div>
}
