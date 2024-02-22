import './App.css';
import HideShowList from "./components/HideShowList"
// import {useState} from "react"

/* 
      ---------My logic is ---------
 Whenever button clicked, it will change the status of color
 According to the status of color, className will change
 According to that className, css will apply
 */

function App() {
  // const[color, setColor] = useState(true);
  return (
    <div>
      <div className="App">
        <HideShowList/>
      </div>
      {/* {color ? className = "black" : className = "white"}
      
      <button
        onClick={()=>{
          setColor(!color);
        }}>
        {color ? "Dark " : "Light "} Theme
      </button> 
      */}
    </div>
  );
}

export default App;
