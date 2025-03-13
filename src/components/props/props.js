import React from "react";
function Properties(props){
        return(
            <div>
            <p>Hi! I'am {props.name}</p>
            <p> I'am {props.age} years old.</p>
            {props.children}
            </div>
        );
}
export default Properties;