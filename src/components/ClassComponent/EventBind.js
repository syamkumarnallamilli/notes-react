import React from "react";
import { Component } from "react";
class EventBind extends Component{
    constructor(){
        super()
        this.state={  //Stores dynamic data inside a component.
            message:"How many ways binding this keyword"
        }

        // 3.bindinf in the class constructor   best approach as per react documemtation
        // this.Clickhandler=this.Clickhandler.bind(this)


    };
    //  Clickhandler(){
    //     this.setState({
    //         message:"4 types"
    //     })
    //     console.log(this) //undefined
    // }


    // 4.arrow funcction in class prorpertty
    Clickhandler=()=>{
        this.setState({
            message:"4 types"
        })
    }   
    render(){
        return(
            <div>
          <h3>Event Bindings: {this.state.message}</h3>  

          {/* <button onClick={this.Clickhandler}>click Me</button>       //this keyword in event handler is undefined */}
           {/* <button onClick={this.Clickhandler.bind(this)}>click Me</button>  1. bind this keyword in render  method,this method should problem in large project */}
           {/* 2. arrow function */}
           {/* <button onClick={()=>this.Clickhandler()}>click Me</button> */}


           <button onClick={this.Clickhandler}>click</button>



          </div>
        );
    }
}
export default EventBind