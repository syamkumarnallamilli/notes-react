// Show a simple list of names.

import React from "react";
import { useState } from "react";

function UseStateArray(){
    const[names,setNames]=useState(['Syam',"kumar","bill-gates",'elon'])

    //Add a new name when clicking a button.

    const addName=()=>{
        if(!names.includes("david")){ //Prevent duplicate addition
        setNames([...names,"david"]) //Adds "David" to the array
    }}
    return(
        <div style={{border:"1px solid red",height:"30vh"}}>
            <p>Name List</p>
            <ul>
                {
                    names.map((name,index)=>(  //.map() loops through the array and displays each name as a <li>.
                        <li key={index}>{name}</li>
                    ))
                }
            </ul>
            <button onClick={addName}>ADD-NAME</button> {/* Button to add a name */}
            {/* Step-by-Step Execution
                    First Click
                    names = ["John", "Emma", "Mike"]

                    names.includes("David") → false

                    !false → true

                    "David" is added → ["John", "Emma", "Mike", "David"] */}

                    {/* Second Click
                    names = ["John", "Emma", "Mike", "David"]

                    names.includes("David") → true

                    !true → false

                    "David" is not added again. */}


        </div>
    )
}
export default UseStateArray