import React, { Component } from "react";
class Counter extends Component{
    constructor(){
        super()
        this.state={
            count: 0  //initilising the state
        }
    }
    increment(){
         console.log("before",this.state.count)
        // this.setState({
        //     count:this.state.count +1 //updating the state
        // })
        // this.setState({
        //         count:this.state.count +1 //updating the state
        //      },()=>{
        //         console.log("updated count",this.state.count)
        //      })


        // this.setState((prevState)=>({count:prevState.count+1}))
        
        //prevstate with callback
        // this.setState((prevState)=>({count:prevState.count+1}),()=>{
        //     console.log("updated count:", this.state.count)
        // })




        //debugging without prevstate ,callback
                // Each setState reads this.state.count = 0, so it doesn’t see the latest updates.
                // React batches updates, and only one update happens instead of three.
        // this.setState({
        //              count:this.state.count +1 //updating the state
        //          },()=>{
        //              console.log("after updated count",this.state.count)
        //           })



        //Debugging With prevState
        // prevState keeps track of the latest count, so each update happens sequentially.
        // React updates state correctly because each prevState.count holds the last updated value.
        
        this.setState((prevState)=>({count:prevState.count+1}),()=>{
                 console.log("updated count:", this.state.count)
             })
        
    }

    render(){
        // console.log("Component Re-rendered!");
        return (
            <div>
            <h1>Count:{this.state.count}</h1>
            {/* <button onClick={()=>this.increment()}>increment</button> */}
            <button onClick={() => {
          this.increment();
          this.increment();
          this.increment();
        }}>
          Increment 3 Times
        </button>
            </div>
        )
        
    }
}
export default  Counter