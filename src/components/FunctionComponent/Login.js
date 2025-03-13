import React from "react";
import { useState } from "react";
const LoginForm=()=>{
    const[email, setEmail]=useState()
    const[password,setPassword]=useState()
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("login with:",email,password)
    }
    return(
        <div style={{marginBottom:"50px",display:"flex",justifyContent:"center",alignItems:"center",height:"50vh",border:"1px solid blue"}}>
            <form onSubmit={handleSubmit} style={{border:"1px solid red",padding:"20px",textAlign:"center",width:"190px",borderradius:"8px",gap:"10px"}}>
            <h3>Login</h3>
            <label>Email:</label>
            <input type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                o
            required></input>
            <label>Password:</label>
            <input type="password" 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            required></input>
            <button type="submit" style={{
    width: "50%",
    padding: "10px",
    borderradius: "4px",
    cursor: "pointer",
    fontsize: "16px",
    
}}>Login</button>
            </form>
        </div>
    )

}
export default LoginForm;