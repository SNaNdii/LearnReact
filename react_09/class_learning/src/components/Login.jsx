import React, { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

export const Login = () => {
    const [text,setText] = useState("dd")
    const [pass,setPass] = useState("")
    const navigate = useNavigate()
    
    const {handleAuth} = useContext(AuthContext) 

      const handleRoute = ()=>{

        if(text==="dd"&& pass ==="dd"){
            handleAuth(true)
                navigate("/")
        }else{
            alert("login first")
        } 
        
    }
    
    return <div>
        <input onChange={(e)=>setText(e.target.value)} type="text" placeholder="Username"/> 
        <input onChange={(e)=>setPass(e.target.value)} type="password" placeholder="Password"/> 
        
        <button onClick={handleRoute}>Click</button>
    </div>
}