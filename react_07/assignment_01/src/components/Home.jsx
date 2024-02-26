import { Container } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import './css/home.css'

function Home(){

    return (
        <>
            <div className='main'>
            <Container><h1>Welcome to our World!</h1></Container>
            </div>
            
            <Grid templateColumns='repeat(4, 1fr)' templateRows='repeat(2, 1fr)'>
                <GridItem w='100%' h='227' bg='blue.300' >
                    <div className='box'>
                        <h2>COLLEGECONNECT</h2>
                        <h4>We enlist series of courses aimed to meliorate the skill set of engineering students</h4>
                    </div>
                </GridItem>
                <GridItem w='100%'>
                    <img src='https://okcredit-blog-images-prod.storage.googleapis.com/2021/03/Software-Development-Business1--1-.jpg'/>
                </GridItem>
                <GridItem w='100%' h='227' bg='blue.300' >
                    <div className='box'>
                        <h2>PROFESSIONAL SKILLING</h2>
                        <h4>We offer great opportunities for learners to learn from best practices and industry benchmarks followed by L&T</h4>
                    </div>
                </GridItem>
                <GridItem w='100%'>
                    <img src='https://okcredit-blog-images-prod.storage.googleapis.com/2021/03/Software-Development-Business1--1-.jpg'/>
                </GridItem>
                <GridItem w='100%'>
                    <img src='https://okcredit-blog-images-prod.storage.googleapis.com/2021/03/Software-Development-Business1--1-.jpg'/>
                </GridItem>
                <GridItem w='100%' h='227' bg='blue.300' >
                    <div className='box'>
                        <h2>EMERGING TECH</h2>
                        <h4>We empower blue-collar workers and certify them with industry-aligned skills for employment opportunities</h4>
                    </div>
                </GridItem>
                <GridItem w='100%'>
                    <img src='https://okcredit-blog-images-prod.storage.googleapis.com/2021/03/Software-Development-Business1--1-.jpg'/>
                </GridItem>
                <GridItem w='100%' h='227' bg='blue.300' >
                    <div className='box'>
                        <h2>ASSESSMENTS & CERTIFICATIONS</h2>
                        <h4>Employers assess students on various employability factors and help improve skills and make them employable</h4>
                    </div>
                </GridItem>
            </Grid>
        </>
    )
 }
 export default Home