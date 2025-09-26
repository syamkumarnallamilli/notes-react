
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
import counterBasic from './components/useState Problems/counterBasic';
import CounterFunc from './components/FunctionComponent/CounterFunction';
import IncreDecre from './components/FunctionComponent/Counter1';
import LoginForm from './components/FunctionComponent/Login';
import Character from './components/FunctionComponent/CharacterCount';
import Gallery from './components/Profiles';
import Click from './components/EventHandling/FunctionClick';
import ClassClick from './components/EventHandling/ClassClick';
import Parent from './components/props/Parent';

import EventBind from './components/ClassComponent/EventBind';
import ParentComponent from './components/ClassComponent/ParentComponent';
import ClassRendering from './components/ClassComponent/ConditionalRendering';
import CounterApp from './components/useState Problems/counterBasic';
import ToggleText from './components/useState Problems/ToggleText';
import BackgroundColor from './components/useState Problems/Background';
import FormInputHandling from './components/useState Problems/Form';
import TogglePasswordVisibility from './components/useState Problems/TogglePassword';
import NameList from './components/List rendering/NameList';
import PersonList from './components/List rendering/Person';
import CheckedForm from './components/Checked';
import ClassCounter from './components/Hooks/UseState/ClassCounter';
import HookCounter from './components/Hooks/UseState/FunctionCounter';
import ShoppingCart from './components/Hooks/UseState/PreviousState';
import NumberAddition from './components/Hooks/UseState/PrevState2';
import ShoppingCart2 from './components/Hooks/UseState/PrevState3';
import UseStateObject from './components/Hooks/UseState/ObjectState';
import UseStateObject2 from './components/Hooks/UseState/ObjectState2';
import UserProfile from './components/Hooks/UseState/NestedObject';
import UseStateArray from './components/Hooks/UseState/ArrayState';
import AddNameInput from './components/Hooks/UseState/ArrayState2';
import ChatApp from './components/Hooks/UseState/ChatApp';
import UserList from './components/Hooks/UseEffect/Useeffect1';
import HookCounterOne from './components/Hooks/UseEffect/HookCounterOne';
import HookMouse from './components/Hooks/UseEffect/HookMouse';
import UseReducer from './UseReducer';
import LoginForm1 from './UseReducerLginForm';
import Autofocus from './components/Hooks/useRef/Focus';
import App1 from './reactApp';
import Navbar from './components/Routing/Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Routing/Pages/Home';
import Products from './components/Routing/Pages/Products';
import About from './components/Routing/Pages/About';
import Contact from './components/Routing/Pages/Contact';
import OptimizedImageGallery from './components/ImageOptimation/ImageOpt';
import Counter from './components/useState Problems/counterBasic';
import Parent1 from './components/props/Parent1';
import PrevState4 from "./components/Hooks/UseState/PrevState4"
import Main from './components/useState Problems/Main';
import UseEffect from './components/Hooks/UseEffect/UseEffect';

function App() {
  const fruits=["apple","banana","orange","grapes"];
  return (
    <div className="App">
      <Navbar/>
        <div style={{display:"flex", justifyContent:"center", alignItems:'center',width:'100%',height:'80vh'}}>
        <Routes>
           <Route path='/' element={<Home/>}/> {/*default */}
           <Route path='/product' element={<Products/>}/>
           <Route path='/about' element={<About/>}/>
           <Route path='/contact' element={<Contact/>}/>
        </Routes>
        </div>
      {/* <Greet/>
      <MyclassComponent/>
      <Hello/>
      <JsxDifferences/>
      <Properties name="syam"age="25"/>
      <Properties name="kumar" age="23"> personal details</Properties>  */}
      {/* Passing an Object as a Prop */}
      {/* <Obj details={{name:"Laptop",price:"15000",stock:true}}/>
      <Obj details={{name:"Bluetooth",price:"1000",stock:true}}/>
      <Obj details={{name:"Headphones",price:"1000",stock:true}}/>
      <Obj details={{name:"Desktop",price:"30000",stock:false}}/> */}

      {/* passing an array as a prop */}
      
      {/* <Items itemsList={fruits}><p>this is fruits</p></Items>
      <MyProp name="syam" age={23}/> */}
      {/* <ClassState/>
      <Counter/>
      <CounterFunc/>
      <IncreDecre/>
      <LoginForm/>
      <Character/>
      <Gallery/>

      <Click/>

      <ClassClick/>

      <Parent/>
        <EventBind/>

        <ParentComponent/>

        <ClassRendering/> */}
           {/* <Character/>

           <Parent/> */}
           {/* <Parent/> */}
           <Parent1/>
        {/* UseStae Problems */}
        <CounterApp/>
        <ToggleText/>

        <BackgroundColor/>

        <FormInputHandling/>
        <TogglePasswordVisibility/>

        <NameList/>
        <CheckedForm/>
        

         {/* hooks */}
         {/* <ClassCounter/>
         <HookCounter/>
         <ShoppingCart/>

         <NumberAddition/>

         <ShoppingCart2/>
          
         <UseStateObject/>
          <UseStateObject2/>
          <UserProfile/> */}

          {/* <UseStateArray/>

          <AddNameInput/> */}

          {/* <ChatApp/> 

          <UserList/>

          <HookCounterOne/>

          <UseReducer/>

           <HookMouse/> */}
{/* 
          <LoginForm1/>
          <Autofocus/>
           */}
        {/* <App1/> */}
<HookCounter/>
      <Counter/>
      <PrevState4/>
        {/* <OptimizedImageGallery/> */}


        <Main/>

        {/* useeffect */}
        <UseEffect/>
    </div>
  );
}

export default App;
