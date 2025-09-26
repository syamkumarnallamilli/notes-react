import React, { useState } from 'react'

const CounterButtons = () => {
    const[count,setCount]=useState(0)
  return (
    <div style={{border:"1px solid green",}}>
        <p>{count} times clicked</p>
        <button onClick={()=>setCount(count+1)}>Incre</button>
        <button onClick={()=>setCount(count-1)} disabled={count<=0}>Decre</button>
        <button onClick={()=>setCount(0)}>reset</button>
    </div>
  )
}

export default CounterButtons