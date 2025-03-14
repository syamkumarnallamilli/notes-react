import logo from './logo.svg';
import './App.css';
 import Greet from './components/Greet';
import MyclassComponent from './components/Welcome';
import Hello from './components/withOutJSX';
import JsxDifferences from './components/JsxDifference';
import Properties from './components/props';
import Obj from './components/props/Object';
import Items from './components/props/ItemList';
// import { Greet } from './components/Greet';

function App() {
  const fruits=["apple","banana","orange","grapes"];
  return (
    <div className="App">
      <Greet/>
      <MyclassComponent/>
      <Hello/>
      <JsxDifferences/>
      <Properties name="syam"age="25"/>
      <Properties name="kumar" age="23" />
      {/* Passing an Object as a Prop */}
      <Obj details={{name:"Laptop",price:"15000",stock:true}}/>
      <Obj details={{name:"Bluetooth",price:"1000",stock:true}}/>
      <Obj details={{name:"Headphones",price:"1000",stock:true}}/>
      <Obj details={{name:"Desktop",price:"30000",stock:false}}/>

      {/* passing an array as a prop */}
      
      <Items itemsList={fruits}/>
    </div>
  );
}

export default App;
