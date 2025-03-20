import React from "react";
import { useState } from "react";

const FormInputHandling=()=>{
    const[user,setUser]=useState()
    const handleChange=(e)=>{
        setUser(e.target.value)

    }
    return(
        <div>
            <h3>Form Input</h3>

            <form >
                <label htmlFor="Name">Enter Your Name: </label>
                <input
                    type="text" 
                    id="Name" 
                    value={user} 
                    onChange={(handleChange)}>
                </input>
                
                
            </form>
            <p>Hello,{user}</p>
            </div>
            
    )
}
export default FormInputHandling