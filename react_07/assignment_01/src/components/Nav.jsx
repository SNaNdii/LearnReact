import { Flex, Spacer } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import "./css/nav.css"

function NavBar(){
    return (
        <Flex className='cont'>
            <Text fontSize='xl' as='b'>Home</Text>
            <Spacer/>
            <Text fontSize='xl' as='b'>Login</Text>
            <Spacer/>
            <Text fontSize='xl' as='b'>SignUp</Text>
            <Spacer/>
            <Button colorScheme='blue'>No of Submissions</Button>
            <Spacer/>
            <Button colorScheme='blue'>Theme Change</Button>
            <Spacer/>
            <Text fontSize='xl' as='b'>Contact Us</Text>
        </Flex>
    )
 }
 export default NavBar