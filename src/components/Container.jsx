import React, { useContext } from 'react'
import { GlobalContext } from '../App'
import Display from './Display'
import FieldScale from './FieldScale'
import {
  INC_HEIGHT,
  DEC_HEIGHT,
  INC_WIDTH,
  DEC_WIDTH,
} from '../store/actions'

export default function Container() {
  const {state, dispatch} = useContext(GlobalContext)
  
  const incHeight = (value) => {
    dispatch({
      type: INC_HEIGHT,
      payload: value,
    })
  }
  
  const decHeight = (value) => {
    dispatch({
      type: DEC_HEIGHT,
      payload: value,
    })
  }
  
 const incWidth = (value) => {
    dispatch({
      type: INC_WIDTH,
      payload: value,
    })
  }
  
  const decWidth = (value) => {
    dispatch({
      type: DEC_WIDTH,
      payload: value,
    })
  }

  const STEP = 1

  return <div className="container">
    <FieldScale title={"Height:"} value={state.height} onInc={() => incHeight(STEP)} onDec={() => decHeight(STEP)} />
    <FieldScale title={"Width:"} value={state.width} onInc={() => incWidth(STEP)} onDec={() => decWidth(STEP)} />
    <Display />
  </div>
}
