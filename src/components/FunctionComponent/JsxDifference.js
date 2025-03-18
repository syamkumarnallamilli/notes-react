import React from "react";
function jsxDifferences(){
    function submit(){
        alert("button clicked")
    }
    return(
        <div>
            {/* htmlFor instead of for */}
            <label htmlFor="user">Username:</label>
            <input type='text' value="" id="user"></input>

            {/* className instead of class */}
            <div className="diff">
                <p>className instead of class</p>

          {/* style using JavaScript object */}
            <p style={{color:"red",fontSize:"20px"}}>style using JavaScript object </p>

            
      {/* Self-closing tags must be closed */}
            <img src="./logo192.png" alt="image"></img>


               {/* Boolean attribute requires curly braces */}
            <input type="checkbox" checked />


            {/* Event handling using camelCase */}
            <button onClick={submit}>click</button>


            </div>
        </div>
    );
}
export default jsxDifferences;
