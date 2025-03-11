import React,{Component} from "react"; //import React and  component
 class MyclassComponent extends Component{  //extending react component
    render(){
        return(
            <>
            <h1>class component</h1>
            <p>A class component requires you to extend from React. Component and create a render function that returns a React element.</p>
            <p>this refers to the current instance of the class.</p>
            <p> <h3>render()</h3>Every class component must have a render() method.
It returns JSX (UI elements) that will be displayed on the screen.
</p>
            <p>state is an object that stores dynamic data inside a component.</p>
            </>
            
        );
    }
    
}
export default MyclassComponent;