import { useReducer } from "react"
import UseReducer from "./UseReducer"

const initialState={
    email:"",
    password:"",
    isAuthenticated:false,
    error:""
}
const reducer=(state,action)=>{

    if(action.type==="setField"){
        return({...state,[action.field]:action.value})
    }
    else if(action.type==="login"){
        return({...state,isAuthenticated:true,error:""})
    }
    else if(action.type==="loginFailed"){
        return({...state,error:"invalid email&password"})
    }
    else{
        return state
    }

}

function LoginForm1(){
    const[state,dispatch]=useReducer(reducer,initialState)

    const handleChange=(e)=>{
        dispatch({
            type:"setField",
            field: e.target.name,
            value:e.target.value
        })

    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(state.email==='user@gmail.com' && state.password==='123'){
            dispatch({
                type:"login",
                
            })
        }
        else{
            dispatch({
                type:'loginFailed'
            })
        }

    }

    return(
        <div>
            {state.isAuthenticated ?(
                <h3>Welcome to dashboard</h3>
            ):(
            
            <form onSubmit={handleSubmit}>
                <p>Login Form</p>
                <input
                type="email"
                name='email'
                value={state.email}
                onChange={handleChange}
                placeholder="enter email.."
                />


                <input
                type='password'
                name='password'
                value={state.password}
                onChange={handleChange}
                placeholder="enter password..."
                />

            <button type='submit'>Login</button>
            {state.error && <p style={{color:"red"}}>{state.error}</p>}

            </form>
            )}
        </div>
    

    )
}
export default LoginForm1