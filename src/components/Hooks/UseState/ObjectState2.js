import React from "react";
import { useState } from "react";
function UseStateObject2(){


    const[user,setUser]=useState({
        firstName:"",
        LastName:""
    })
    return(
        <form style={{border:"1px solid green",height:"20vh",padding:"10px"}}>
            <input 
                type="text"
                value={user.firstName}
                // onChange={(e)=>setUser({firstName:e.target.value})}

                // onChange={(e)=>setUser({ ...user,firstName:e.target.value})} 

                //previous state

                onChange={(e) =>
                    setUser((prevUser) => ({ ...prevUser, firstName: e.target.value }))
                  }
            
            />

            <input
             type="text"
             value={user.LastName} 
            //  onChange={(e)=>setUser({LastName:e.target.value})}  

            // onChange={(e)=>setUser({ ...user, LastName:e.target.value})}  

            onChange={(e) =>
                setUser((prevUser) => ({ ...prevUser, LastName: e.target.value }))
              }
            
            />
            <p>First_Name:{user.firstName} </p>
            <p>Last_Name: {user.LastName} </p>
        </form>

        
    )
}
export default UseStateObject2