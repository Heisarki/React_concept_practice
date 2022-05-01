import React, { useState } from 'react'

console.log('1_Main App')

export default function Counter() {
    console.log('2_counter')
    const initial=() => {
        console.log('3_Initial State with fucntion initialization');
        return 10
    }

    const [state, setState] = useState(initial, console.log("3_Inside State"))
    
    
    const increment = () => {
        setState(state=>state + 1)
        setState(state => state + 1)
        console.log('decrement')
    }
    const decrement = () => {
        setState(state - 1)
        console.log('increment')
    }

    return (
        <>
            <h1>Use State</h1>
            <button className='btn-1' onClick={increment}>+</button>
            <span>{state}</span>
            <button className='btn-1' onClick={decrement}>-</button>
            {console.log('4_APP')}
        </>
  )
}
