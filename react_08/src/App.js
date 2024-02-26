import { Routes, Route} from "react-router-dom";
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">

      <Nav/>

      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
      
      
    </div>
  );
}

export default App;
