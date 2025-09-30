// import { Component } from "react";
// import React  from "react";
// import Counter from "./CounterClass";
// class ClassState extends Component{
//     constructor(){
//         super()
//         this.state={  //Stores dynamic data inside a component.
//             message:"welcome to channel",
//             attempt:0,
//             limitReached:false
//         };
       
        
//     };
//     // handleClick() {
//     //     this.setState({ message: "Thank you for subscribing" }); //Updates state and triggers re-render.
//     // };

//     handleClick=()=>{
//         this.setState({message: "Thank you for subscribing" 
            
//         })
//     }
//     handleClicked=()=>{
//         this.setState((prev) => ({
//             attempt: prev.attempt + 1
//         }));
//     }
// //     componentDidMount(){ //runs once after first render.
// //         console.log("immediately runs")
// //         setTimeout(()=>{
// //             this.setState({message:"after timeout it will appear text"},()=>{
// // console.log("updated state",this.state.message)
// //             })
            
// //         },3000)
// //     }
//    componentDidUpdate(prevProps, prevState) { //runs after every update, lets you compare old vs new values.
//   if (prevState.message !== this.state.message) {
//     console.log("State changed from:", prevState.message, "to:", this.state.message);
//   }
//    if (this.state.attempt === 5 && !this.state.limitReached) {
//         this.setState({
//           message: "You have reached the limit",
//           limitReached: true,
//         });
//       }
    
// }

//     render(){
//         return(
//             <div>
//                         <h1 style={{ color: this.state.limitReached ? "red" : "black",fontSize:this.state.limitReached ? "10px":"20px" }}>
//           {this.state.message}
//         </h1>
//         <p>Attempts: {this.state.attempt}</p>
  
//    <button onClick={this.handleClicked}>Attempts</button>
//                 {/* <button onClick={()=>this.handleClick()} >Subscribe</button> */}
//                  <h1>{this.state.message}</h1>
//                 <button onClick={this.handleClick}>Subscribe</button>
//             </div>
//         );
//     }
// }
// export default ClassState;


import { Component } from "react";
import React from "react";

class ClassState extends Component {
  constructor() {
    super();
    this.state = {
      message: "welcome to channel",
      attempt: 0,
      limitReached: false,
    };
  }

  handleClick = () => {
    this.setState({ message: "Thank you for subscribing" });
  };

  handleClicked = () => {
    this.setState((prev) => ({
      attempt: prev.attempt + 1,
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    // Log message change
    if (prevState.message !== this.state.message) {
      console.log(
        "State changed from:",
        prevState.message,
        "to:",
        this.state.message
      );
    }

    // Check attempts
    if (this.state.attempt === 5 && !this.state.limitReached) {
      this.setState({
        message: "You have reached the limit",
        limitReached: true,
      });
    }
  }

  render() {
    return (
      <div>
        <h1
          style={{
            color: this.state.limitReached ? "red" : "black",
            fontSize: this.state.limitReached ? "14px" : "20px",
          }}
        >
          {this.state.message}
        </h1>
        <p>Attempts: {this.state.attempt}</p>

        {/* Attempts button */}
        <button
          onClick={this.handleClicked}
          disabled={this.state.limitReached}
        >
          Attempts
        </button>

        {/* Subscribe button */}
        <button
          onClick={this.handleClick}
          disabled={this.state.limitReached}
        >
          Subscribe
        </button>
      </div>
    );
  }
}

export default ClassState;
