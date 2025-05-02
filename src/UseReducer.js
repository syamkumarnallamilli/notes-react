import { useReducer } from "react"

let initialState=0;
const reducer=(state,action)=>{
    if(action.type==="Increment"){
        return state+1;
    }
    else if(action.type==="Decrement"){
        return state-1;
    }
    else if(action.type==="reset"){
        return 0;
    }
    else{
        alert("nothing else")
    }

}

function UseReducer(){
    const[state, dispatch]=useReducer(reducer,initialState)
    return(
        <div>
            <p>Count: {state}</p>
            <button onClick={()=>dispatch({type:"Increment"})}>+</button>
            <button onClick={()=>dispatch({type:"Decrement"})}>-</button>
            <button onClick={()=>dispatch({type:"reset"})}>0</button>

        </div>
    )
}
export default UseReducer