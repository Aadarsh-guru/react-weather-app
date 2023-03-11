import React, {useState} from 'react'
import Sunset from '../constants/bg.jpg'
import { Box } from '@mui/material'
import Form from './Form'
import Information from './Information'


const Home = () => {

    const [results, setResults] = useState({})

    return (
        <Box style={{ height: '100vh', display:'flex', alignItems:'center', width:'65%', margin: '0 auto' }} >
            <Box style={{
                backgroundImage: `url(${Sunset})`,
                width: '27%',
                height: '80%',
                backgroundSize:'cover',
                borderRadius: '20px 0 0 20px'
            }}></Box>
            <Box style={{width:'73%', height:'80%'}}>
                <Form setResults={setResults} />
                <Information results={results} />
            </Box>
        </Box>
    )
}

export default Home