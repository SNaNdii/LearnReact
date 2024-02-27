import './App.css'
import { Description } from './components/Description'
import { Product } from './components/Product'
import { Routes, Route} from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Nav from "./components/Nav";
import { Login } from './components/Login';
import { PrivateComp } from './context/PrivateComp';

function App() {

  return (
    <div>
      <Nav/>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/description/:id" element={<Description/>}></Route>
        <Route path="/about" element={<PrivateComp> <About/> </PrivateComp>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </div>
  )
}

export default App
