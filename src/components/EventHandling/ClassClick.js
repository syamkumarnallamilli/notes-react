import React from "react";
import { Component } from "react";
class ClassClick extends Component{
     HandleClick(){
        console.log("clicked")
    }

    
    render(){
        return(
            <div>
                <h3>class Event handling</h3>
                <button onClick={this.HandleClick}>class</button>
            </div>
        );
    }
}
export default ClassClick;