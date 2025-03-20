import React, { useActionState } from "react";
import { useState } from "react";
const TogglePasswordVisibility=()=>{
    const[password,setPassword]=useState("")
    const[showpassword,setShowpassword]=useState(false)
    const handleClick=()=>{
        setShowpassword(!showpassword)
        console.log(showpassword) // checks the log in console whick btn clicks changes true or flase based on intilas state
    }
    return(
        <div style={{border:"1px solid black"}}>
            <h3>
                password toggle
            </h3>
            <form>
                <label>Pasword:</label>
                <input
                 type = {showpassword ? "text" : "password"} // initially  false that showpassword=false ternary condition is false so type=pasword otherwise true show text
                value={password}
                  onChange={(e)=>setPassword(e.target.value)}            >
                </input>
            </form>
            <button
                onClick={(handleClick)}>
                {showpassword ? "Hide" : "show"}
            </button>
            {/* <p>Password: {password}</p> */}

        </div>
    )
}
export default TogglePasswordVisibility