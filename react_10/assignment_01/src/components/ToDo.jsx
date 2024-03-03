import { Button, Input } from "@chakra-ui/react"
import { useState } from "react";
import {useDispatch , useSelector} from 'react-redux'
import { addTask } from "../Redux/action";
import {Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer} from '@chakra-ui/react'


export const ToDo = () => {
    const dispatch = useDispatch();
    const todos = useSelector((store) => store.task)

    const[text, setText] = useState("");
    const handleAddTdodo = () => {
        dispatch(addTask({
            title : text,
            status : false
        }))
    }
    return <div>
        <Input onChange={(e) => setText(e.target.value)} type="text" placeholder="Enter Task Here"/>

        <Button onClick={handleAddTdodo} colorScheme="blue">Add Task</Button>
        
        <Table variant='striped' colorScheme='blue' size='sm'>
        <TableCaption>Complete your all tasks on time to improve yourself</TableCaption>
            <Tr>
                <Th>Task Name</Th>
                <Th>Remove</Th>
                <Th>Mark Complete</Th>
                <Th>Start Time</Th>
                <Th>End Time</Th>
            </Tr>
            {todos.map( (t, i) => {
                return <Tr>
                    <Td>{t.title}</Td>
                    <Td><Button size='sm' bgColor='#bbe4e9' >Remove</Button></Td>
                    <Td><Button size='sm' bgColor='#bbe4e9'>Mark Complete</Button></Td>
                </Tr>
            })}
        </Table>
    </div>
}