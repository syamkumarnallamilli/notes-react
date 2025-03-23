import { Component } from "react";
import React from "react";
import Properties from "../../props/props";

class ClassCounter extends Component{
    constructor(Properties){
        super(Properties)
        this.state={
            count:0
        }
    }
    increment=()=>{
        this.setState({
            count:this.state.count+1
        });
    }
    render(){
        return(
            <div>
                <h3>class counter</h3>
                <button onClick={this.increment}> count {this.state.count}</button>
            </div>
        )
    }
}
export default ClassCounter