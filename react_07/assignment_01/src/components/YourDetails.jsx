import { Button, Container, Input, Text } from "@chakra-ui/react";
import { useState } from 'react';
import './css/details.css';

function YourDetails(){

    const[user, setUser] = useState([]);
    const[id, setId] = useState(0);

    const getData = async () => {
        try{
            const res = await fetch(`http://localhost:8080/student/${id}`);
            const data = await res.json();
            setUser(data);
        }catch(err){
            console.log(err);
        }
    }
    const showData = () => {
        getData();
    }
    
    return (
        <div className="det">
            <div>
                <h2>Welcome to Your details page</h2>
                <h3>Enter your id here</h3>
                <Input value={id} onChange={(e) => setId(e.target.value)} width='50%' id="id" type="number" placeholder="Enter you ID here" />

                <Button onClick={showData} colorScheme="teal">Find Your Details</Button>
            </div>

            {user.id == undefined ? <h4>Please enter a valid ID</h4> : <div className="data">
                    <Container>
                        <h4 >Your Data is Here</h4>
                        <Text fontSize='lg'>User ID : {user.id}</Text>
                        <Text fontSize='lg'>Name : {user.name}</Text>
                        <Text fontSize='lg'>Email ID: {user.email}</Text>
                        <Text fontSize='lg'>Mobile number : {user.num}</Text>
                        <Text fontSize='lg'>Age : {user.age}</Text>
                        <Text fontSize='lg'>Graduation/Qualification : {user.grad}</Text>
                    </Container>
                </div>}
            
        </div>
    )
}
export default YourDetails