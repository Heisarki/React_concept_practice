import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { up } from '../state/actions/counter'

export default function UseEfx() {
  const countData = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  console.log(countData)
  return (
      <div>
          <h1>Use Effect</h1>
          <div>
              {countData}
          </div>
          <button onClick={()=>{dispatch(up(10))}}>click</button>
     </div>
  )
}
