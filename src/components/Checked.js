import React, { useState } from "react";
const CheckedForm=()=>{
    const[user,setUser]=useState("")
    const[password,setPassword]=useState("")
    const[showpassword,setShowPassword]=useState(false)
    const HandleChange=()=>{
        
        setShowPassword(!showpassword)
    }
    const handleClick=()=>{
        if(!user || !password){ //f || f = f, f || t = t
            alert("both fields are required")
        }
        else{  
            alert("login successful!")
        console.log("username:",user,"password:",password)
    }}
    return(
        <div>
            <h2>checked password</h2>
            <form>

                <label>username </label>
                <input type="text" 
                     value={user}
                    onChange={(e)=>{setUser(e.target.value)}} 
                ></input>




                <label htmlFor="name">Password </label>
                <input 
                    type= {showpassword ? "text" : "password"} 
                    id="name" 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    ></input>


                <input type="checkbox" 
                id="myCheckbox" 
                name="myCheckbox" 
                
                onChange={HandleChange}
                
                ></input>
                 <label htmlFor="myCheckbox">Show Password</label>

                
            </form>
            <button onClick={handleClick}>Login</button>
        </div>
    )
}
export default CheckedForm