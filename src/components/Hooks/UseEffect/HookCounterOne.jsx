import React from "react"
import { useState,useEffect } from "react"
function HookCounterOne(){
   
    const[count,setCount]=useState(0)
    const [name, setName] = useState("User"); /// checking


    useEffect(()=>{
        console.log("Effect runs: Updating document title");
        document.title=`you clicked ${count} times`
    },[count])
    return(
        <div>
            <button
            onClick={()=>setCount(count+1)}>Click {count} times</button>
            <input value={name} onChange={(e) => setName(e.target.value)} /> 
        </div>
    )
}
export default HookCounterOne


//If You Use an Empty Dependency Array ([])

//useEffect(() => {
  //  document.title = `You clicked ${count} times`;
//}, []);

// 1, Runs only once when the component mounts.

// 2. The document title will update only once, using the initial value of count (0).

// 3 .Clicking the button will update the count but won't change the document title, because useEffect never runs again after the initial render.


//Conclusion
// No Dependency Array (useEffect runs on every render) → Updates the title every time, but unnecessary renders may impact performance.

// Empty Dependency Array (useEffect runs only once) → Title updates once, but never reflects future count changes.

// [count] as Dependency (useEffect runs only when count changes`) → Best approach, as it updates the title only when needed.

//When you provide a dependency array like [count] in useEffect(), React will only re-run the effect if count changes. If any other state variable updates, but count remains the same, the effect will not run.

