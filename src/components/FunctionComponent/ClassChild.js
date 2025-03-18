import React from "react";
const ClassChid=(Properties)=>{
    return(
        <div>
        <div>class child</div>
        {/* <button onClick={Properties.parent}>Send Data Class Parent</button> */}

        {/* how to pass parameter when calling parent method from child method, arrow function easy ti pass param from child to parent ,u can pass more param   */}
        <button onClick={()=>Properties.parent("child")}>Send Data Class Parent</button>
        </div>
    )
}
export default ClassChid;