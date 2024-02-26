import { Flex, Spacer } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import "./css/nav.css"
import SideBar from './SideBar'
import {React} from 'react'
import { TotalSubmissions } from './TotalSubmissions'
// import { ThemeContext } from 'styled-components'

function NavBar(){

  // const {handleChange} = createContext(ThemeContext)
    return (
        <Flex className='cont'>

            <SideBar/>
            <Spacer/>

            <Link to="/"><Text fontSize='xl' as='b'>Home</Text></Link>
            <Spacer/>

            <Link to="/enroll"><Text fontSize='xl' as='b'>Enroll</Text></Link>
            <Spacer/>

            <Link to="/details"><Text fontSize='xl' as='b'>Get Your Details</Text></Link>
            <Spacer/>

            {/* {BasicUsage()} */}
            <TotalSubmissions/>
            <Spacer/>

            <Button colorScheme='teal'>Theme Change</Button>
            <Spacer/>

            <Link><Text fontSize='xl' as='b'>Contact Us</Text></Link>
        </Flex>
    )
 }
 export default NavBar