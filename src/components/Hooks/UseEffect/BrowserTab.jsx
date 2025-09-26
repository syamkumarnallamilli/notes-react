import React, { useEffect, useState } from 'react'

const BrowserTab = () => {
    const [name,setName]=useState("")
useEffect(()=>{
    document.title = name ? `${name} is typing...` : 'Welcome!';
    console.log("useffect runs")
},[name])
  return (
    <div>
        <input
        type='text'
        value={name}
        placeholder='enter your name'
        onChange={(e)=>setName(e.target.value)}
        />
    </div>
  )
}

export default BrowserTab