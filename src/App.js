import logo from './logo.svg';
import './App.css';
 import Greet from './components/FunctionComponent/Greet';
import MyclassComponent from './components/ClassComponent/Welcome';
import Hello from './components/withOutJSX';
import JsxDifferences from './components/FunctionComponent/JsxDifference';
import Properties from './components/props/props';
import Obj from './components/props/Object';
import Items from './components/props/ItemList';
import MyProp from './components/ClassComponent/ClassProp';
import ClassState from './components/ClassComponent/ClassState';
import Counter from './components/ClassComponent/CounterClass';
import CounterFunc from './components/FunctionComponent/CounterFunction';
import IncreDecre from './components/FunctionComponent/Counter1';
import LoginForm from './components/FunctionComponent/Login';
import Character from './components/FunctionComponent/CharacterCount';
import Gallery from './components/Profiles';
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
      <Properties name="kumar" age="23"> personal details</Properties> 
      {/* Passing an Object as a Prop */}
      <Obj details={{name:"Laptop",price:"15000",stock:true}}/>
      <Obj details={{name:"Bluetooth",price:"1000",stock:true}}/>
      <Obj details={{name:"Headphones",price:"1000",stock:true}}/>
      <Obj details={{name:"Desktop",price:"30000",stock:false}}/>

      {/* passing an array as a prop */}
      
      <Items itemsList={fruits}><p>this is fruits</p></Items>
      <MyProp name="syam" age={23}/>
      <ClassState/>
      <Counter/>
      <CounterFunc/>
      <IncreDecre/>
      <LoginForm/>
      <Character/>
      {/* <Gallery/> */}
    </div>
  );
}

export default App;
