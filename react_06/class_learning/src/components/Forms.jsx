import { useState } from "react"
import UseRefs from "./USeRefs"

// FORMS------------------------

function Forms(){

    const[data, setData] = useState({
        name : "",
        num : ""
    });

    const handleChange = (e) => {
        const {id, value} = e.target;
        setData({
            ...data,
            [id] : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:8080/users", {
            method : "POST",
            headers : {
                "content-type" : "application/json",
            },
            body : JSON.stringify(data)
        })
    }

    return (
        <div>
            <form  onSubmit={handleSubmit}>
                <input  onChange={handleChange} placeholder="Enter Username Here" id="name" type="text"/>
                <input  onChange={handleChange} placeholder="Enter mobile number Here" id="num" type="number"/>
                <input type="submit" value="submit"/>
            </form>
            <UseRefs/>
        </div>
    )
}

export default Forms