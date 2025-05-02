import { useEffect, useRef } from "react";
function Autofocus(){
    const data=useRef(null)
    const submitHandle=((e)=>{
        e.preventDefault()
        console.log(data.current.value)
        
        
    })
    useEffect(()=>{
        data.current.focus()
        

    })
    

    return(
        <div>
            <form onSubmit={submitHandle}>
            <h3>auto focusing</h3>
            <input ref={data} type='text' placeholder="enter your name"/>
            <input type='submit'/>
            </form>
            
        </div>
    )
}
export default Autofocus;