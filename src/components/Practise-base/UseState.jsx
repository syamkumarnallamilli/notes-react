import React, { useContext } from 'react'
import {useState} from 'react'
import { GlobalContext } from '../Hooks/context/UseContext'
import GlobalThemeContext, { ThemeContext } from '../Hooks/context/ThemeContext'
const UseState = () => {
    const[count,setCount]=useState(0)
    const[text,setText]=useState('')
    const[liked,setLiked]=useState(true)
    const{theme}=useContext(ThemeContext)
  return (
    <div>
        <h1>UseState Hook</h1>
        <dl>
            <dt style={{color:theme==="dark"? "blue":"black"}}>UseState()</dt>
            <dd style={{color:theme==="dark"? "red":"black"}}>Call useState at the top level of your component to declare a state variable.
                useState is a React Hook that allows functional components to store and manage state. State means any data that changes over time and should re-render the UI when updated. useState returns an array with two values: the current state and a function to update it.
            </dd>
        </dl>
<div style={{display:"flex",gap:'30px'}}>
    <div style={{flexDirection:"column"}}>
    <h1>Counter</h1>
    <button onClick={()=>setCount(count+1)}>click here</button>
    <p>counter:{count}</p>
    </div>
    <div>
<h1>Text field(String)</h1>
<input type='text' value={text} onChange={(e)=>setText(e.target.value)}/>
<p>text:{text}</p>
    </div>
    <div>
        <h1>Boolean</h1>
        <label>
        <input type='checkbox'checked={liked} onChange={(e)=>setLiked(e.target.checked)}/> i liked this
</label>
<p>You {liked ? 'liked' : 'did not like'} this.</p>
    </div>
</div>

    </div>
  )
}

export default UseState