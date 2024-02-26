import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./components/Home"
import NavBar from "./components/Nav"
import Enroll from './components/Enroll';
import YourDetails from './components/YourDetails';

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/enroll" element={<Enroll/>}></Route>
        <Route path='/details' element={<YourDetails/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
