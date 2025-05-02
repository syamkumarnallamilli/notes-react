import React from "react"
import { useState,useEffect } from "react"
function HookMouse(){
    const[x,setX]=useState(0)
    const[y,setY]=useState(0)
    const logMousePosition=(e)=>{
        console.log('mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log('useeffect called')
        window.addEventListener('mousemove',logMousePosition)

        

    },[])
    return(
        <div>
            Hooks x-{x} y-{y}
        </div>
    )
}
export default HookMouse