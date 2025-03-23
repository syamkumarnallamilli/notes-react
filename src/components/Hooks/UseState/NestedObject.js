//📌 Nested Objects in useState
//When dealing with nested objects, we need to spread both outer and inner objects.


// Key Benefits of Using Nested Objects in React
// ✅ Better Organization – Groups related data together, improving readability.
// ✅ Easier Updates – Can update specific sections without resetting the entire state.
// ✅ Efficient Re-Renders – React updates only changed parts, improving performance.
// ✅ Simplifies API Integration – Directly stores nested API responses without restructuring.





import React from "react";
import { useState } from "react";

function UserProfile(){

    const[user,setUser]=useState({
        name:"syam",
        address:{city:"new york",zip:123}

    })
    //When the button is clicked, updateCity() is triggered:
    const ChangeAddress=()=>{
        setUser((prevUser)=>({    //prevUser contains the previous state:
            ...prevUser,   //Creates a shallow copy of prevUser.


            address:{...prevUser.address,city:"Odisha"} // // ✅ Preserving `zip`, Creates a shallow copy of prevUser.


        }))
    }
    return(
        <div>
            <p>Name: {user.name}</p>
            <p>Address: {user.address.city}</p>
            <button onClick={ChangeAddress}>ChangeAddress</button>
        </div>
    )
}
export default UserProfile