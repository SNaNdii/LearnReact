import { Button } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import Box from './Box'
import { useState, useEffect } from 'react'
import "./css/enroll.css"

function Enroll(){
    const defaultDetails = {
        name: "",
        email: "",
        num: "",
        age: "",
        grad : ""
    }
    const[details, setDetails] = useState(defaultDetails)

    const handleChange = (e) => {
        const{id, value} = e.target
        setDetails({
                ...details , 
                [id]: value
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:8080/student' , {
            method : "POST",
            headers : {
                "content-type" : "application/json",
            },
            body : JSON.stringify(details)
        })
        alert("Data Successfully Submitted")
        setDetails(defaultDetails);
    }

    return (
        <div>
            <Box>
                <form onSubmit={handleSubmit}>

                    <h3>Enter you name here</h3>
                    <Input onChange={handleChange} type='text' placeholder='Enter Your Name' id='name' value={details.name}/>

                    <h3>Enter you emal id here</h3>
                    <Input onChange={handleChange} type='text' placeholder='Enter Your email id' id='email' value={details.email}/>

                    <h3>Enter you mobile number here</h3>
                    <Input onChange={handleChange} type='number' placeholder='Enter Your Mobile Number' id='num' value={details.num}/>

                    <h3>Enter you age here</h3>
                    <Input onChange={handleChange} type='number' placeholder='Enter Your Age' id='age' value={details.age}/>

                    <h3>Enter you diploma/UG/PG here</h3>
                    <Input onChange={handleChange} type='text' placeholder='Enter Your UG/PG' id='grad' value={details.grad}/>

                    <Input placeholder='Basic usage' type='submit' value="submit" width='' bgColor='teal' />
                </form>
            </Box>
        </div>
    )
 }
 export default Enroll