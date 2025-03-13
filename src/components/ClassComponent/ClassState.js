import { Component } from "react";
import React  from "react";
class ClassState extends Component{
    constructor(){
        super()
        this.state={  //Stores dynamic data inside a component.
            message:"welcome to channel"
        };
       
        
    };
    // handleClick() {
    //     this.setState({ message: "Thank you for subscribing" }); //Updates state and triggers re-render.
    // };

    handleClick=()=>{
        this.setState({message: "Thank you for subscribing" 
            
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                {/* <button onClick={()=>this.handleClick()} >Subscribe</button> */}
                <button onClick={this.handleClick}>Subscribe</button>
            </div>
        );
    }
}
export default ClassState;