import {Flex, Spacer} from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import Box from './Box'

function Home(){

    return (
        <div>
            <Flex>
                <Box>
                    <form>
                        <Input type='text' placeholder='Enter Your Name' />
                        <Input type='text' placeholder='Enter Your Mobile Number' />
                        <Input type='number' placeholder='Enter Your Age' />
                        <Input type='text' placeholder='Enter Your UG/PG' />
                        <Button>Submit</Button>
                    </form>
                </Box>
                <Spacer/>
                <Box></Box>
                
            </Flex>
        </div>
    )
 }
 export default Home