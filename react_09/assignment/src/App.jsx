import { useState } from 'react'
import './App.css'
import { Home } from './components/Home'
import NavBar from "./components/Nav"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar/>
      <Home/>
    </div>
  )
}

export default App
