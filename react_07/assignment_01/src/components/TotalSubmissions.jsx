import { useState, useEffect } from "react";
import { Button } from '@chakra-ui/react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import {React} from 'react'

export const TotalSubmissions = () => {
    const{ isOpen, onOpen, onClose } = useDisclosure()
    const[total, setTotal] = useState();

    const handleClick = () => {
        onOpen();
        getData();
    }
    
    const getData = async () => {
        const res= await fetch('http://localhost:8080/student')
        const data = await res.json()
        setTotal(data.length);
    }

    return (
        <>
        <Button onClick={handleClick} colorScheme='teal'>No of Submissions</Button>
    
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Total Submissions : {total}</ModalHeader>
            <ModalCloseButton />
            </ModalContent>
        </Modal>
        </>
    )
}