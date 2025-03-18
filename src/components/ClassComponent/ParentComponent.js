import React from "react";      
import { Component } from "react";
import ClassChid from "../FunctionComponent/ClassChild";

class ParentComponent extends Component{
    constructor(Props){
        super(Props)
        this.state={
            ParentName: 'I am Parent'
        }
        this.Handleparent=this.Handleparent.bind(this)
    }

    Handleparent(ChildName){
        console.log(`hello ${this.state.ParentName} from ${ChildName}`)
    }


    render(){


        return(
            <div>
            <h3>Class Parent Component</h3>

            <ClassChid parent={this.Handleparent}/>
            </div>
        )
            
        
    }
}
export default ParentComponent