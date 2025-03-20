
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


function App() {
  const fruits=["apple","banana","orange","grapes"];
  return (
    <div className="App">
      {/* <Greet/>
      <MyclassComponent/>
      <Hello/>
      <JsxDifferences/>
      <Properties name="syam"age="25"/>
      <Properties name="kumar" age="23"> personal details</Properties>  */}
      {/* Passing an Object as a Prop */}
      <Obj details={{name:"Laptop",price:"15000",stock:true}}/>
      <Obj details={{name:"Bluetooth",price:"1000",stock:true}}/>
      <Obj details={{name:"Headphones",price:"1000",stock:true}}/>
      <Obj details={{name:"Desktop",price:"30000",stock:false}}/>

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
           <Character/>

           <Parent/>
        {/* UseStae Problems */}
        <CounterApp/>
        <ToggleText/>

        <BackgroundColor/>

        <FormInputHandling/>
        <TogglePasswordVisibility/>

        <NameList/>
        <CheckedForm/>
        

        
    </div>
  );
}

export default App;
