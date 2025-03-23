import React from "react";
import { useState } from "react";
function UseStateObject(){

    const[user,setUser]=useState({
        Name:"syam",
        age:24
    })

    // const ChangeName=()=>{
    //     setUser({Name:"kumar"}) // age property is lost
    //     // If we update only one property without spreading (...prevState), the rest of the object gets lost.
    // }



    // Correct Way (Using Spread Operator)
    const ChangeName=()=>{
        setUser((prevUser)=>({
            ...prevUser,
            Name:"kumar",
        }))
    }
    

    return(
        <div style={{border:"2px solid red"}}>
            <dl>
                <dt><strong>Using useState with Object</strong></dt>
                <dd>When using an object in useState, updating state does not merge the previous values automatically. We need to spread the previous state manually.</dd>
            </dl>


            <p>name: {user.Name}</p>
            <p>age: {user.age}</p>

            <button onClick={ChangeName}>change Name</button>
        </div>
        
    )
}
export default UseStateObject