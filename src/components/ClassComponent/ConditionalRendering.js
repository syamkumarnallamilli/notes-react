import React from "react";
import { Component } from "react";
class ClassRendering extends Component{
    constructor(){
        super()
        this.state={
            isLoggedIn:false

        }
    }
    render(){
        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>
        //             <p>Class Component : Conditional Rendering</p>
        //             <p>Welcome Syam</p>
        //         </div>
        //     );
        // } else {
        //     return (
        //         <div>
        //             <p>Class Component : Conditional Rendering</p>
        //             <p>Welcome Guest</p>
        //         </div>
        //     );
        // }

        //2.variable method
        // let message
        // if(this.state.isLoggedIn){
        //     message=<p>welcome syam</p>
        // }
        // else{
        //     message=<p>welcome guest</p>
        // }
        // return(
        //     <div>
        //         <p>Class Component : Conditional Rendering</p>
        //         <p>Storing JSX in a Variable: {message}</p>
        //     </div>
        // )


        //3.ternary operator
        // return  this.state.isLoggedIn ?(
        //     <p>welcome syam</p>
        // ) :(<p>welcome guest</p>
            
        // )


        //4.short circuit operator   if condition is false nothing to dispaly in ui

         return this.state.isLoggedIn && <p>welcome syam</p>





        // return(
        //     <div>
        //     <p>Class Component : Conditional Rendering</p>
        //     <p>welcome Syam</p> 
        //     <p>welcome guest</p>
        //     </div>
        // );
    }




}
export default ClassRendering;