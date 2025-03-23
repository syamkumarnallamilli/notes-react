//Add a Name from an Input Field
// User can type a name and add it to the list.

import React from "react";
import { useState } from "react";


function AddNameInput(){
    const[newName,setNewName]=useState("") //Input state, // do 1st step related process
    const[names,setNames]=useState([]) // Start with an empty array//2nd step process, empty array to store newName from user input type

    const addNames=()=>{
        if(newName.trim() === "") return // Prevent empty names
        setNames([...names,newName])
        setNewName(""); // Clear input

    }
    return(
        <div style={{border:"1px solid blue"}}>
            <form>
                <input 
                    type="text"
                    value={newName}
                    onChange={(e)=>{
                        setNewName(e.target.value) // ✅ Update input state
                    }}
                    placeholder="enter your name..."
                />
            </form>
            

            <button onClick={addNames}>ADD NAMES</button>

            <h3>adding names to array</h3>
            <ul>
                {
                    names.map((name,index)=>(  //.map() loops through the array and displays each name as a <li>.
                        <li key={index}>{name}</li>
                    ))
                }
            </ul>

        </div>
    )
}
export default AddNameInput


// steps

//1.we create two state varibles
  //==>"names" stores the list of names.
  //==> "newName" stores the value from the input field.


//2.Adding a name when clicking the button:
  //==>The new name is added to the array.
  //==>The input field is cleared.


  //3.User input updates state:
   //==>As the user types, the newName state updates.





  //Understanding the Logic of if (newName.trim() === "") return;
// This line prevents adding empty names when the user clicks the button. Let’s break it down in detail:

//Step 1: Understanding trim()
// trim() removes any leading and trailing spaces from a string.

// Example:
  
// "   Hello   ".trim(); // Output: "Hello"
// "   ".trim(); // Output: "" (empty string)


//Step 2: The Condition if (newName.trim() === "") return;
// Checks if the input is empty after removing spaces.

// If the trimmed input is an empty string (""), the function stops execution using return.


//if (newName.trim() === "") return;
// " ".trim() → ""

// Now, the condition becomes if ("" === "") return; → Prevents adding an empty name.


//Why is return; Used?
// Stops further execution of addName().

// Prevents adding an empty or blank name to the list.



