import './App.css';
import React, {useState} from 'react';

function App() {
  const[message, setMessage] = useState("");

  const name = "Nandita"; // 1) some data saved in parent

  const handleChange = (mes)=>{ // 2) callBack function for taking data from child function
    console.log("message : ", mes);
    setMessage(mes);
  }
  
  return (
    <div className="App">
      <First n = {name} ms = {message}/> {/*  1) by using props, can sen the data to child */}
      <Second GetData = {handleChange}/>{/*call child function in main function with callback parameter*/}
      <Third message = {message}/>
      
    </div>
  );
}
function First(props){ //  1) can recieve data from parent
  console.log("Message in first : ", props.ms);
  return <h1>My name is {props.n}</h1>
}

// How to send data from child to parent ?
// for this -  create callBack function in main , call this call back function in child with child data parameter , call child function in main function with callback parameter
function Second({GetData}){
  const m = "Hey! I am the second child";
  GetData(m);// 2) call this call back function in child with child data parameter
  return <div> Second Child</div>
}

function Third({message}){
  console.log("Get data from sibling : ", message);
  return <h1>My Third Child</h1>
}

export default App;
