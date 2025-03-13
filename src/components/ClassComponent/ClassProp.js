import { Component } from "react";
import React from "react";

class MyProp extends Component{
    render(){
        // this.props.name="kumar"; //props is immutable doesnot change any circumstances
        console.log(this.props);
        return(
            <div>
                <h1>{this.props.name} and {this.props.age} </h1>
            </div>
        )
    }
}
export default MyProp;