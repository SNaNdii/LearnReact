import './App.css';
import React, { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const buttonHandler = (el)=>{
    setCounter(counter+el);
  }
  if(counter > 10){
    alert("Maximum Reach");
    setCounter(0);
  }

  return (
    <div className="App">

      <h1> Counter: {counter} </h1>

      <button 
        onClick = {() => {
          buttonHandler(1);
        }}>Add 1
      </button>

      <button 
        onClick={() => {
          buttonHandler(-1);
        }}>Sub 1
      </button>

        <h4> Number is {counter%2 == 0 ? "Even" : "Odd"}</h4>
    </div>
  );
}

export default App;
