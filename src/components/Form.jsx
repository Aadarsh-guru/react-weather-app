import { Box, Button, InputBase } from '@mui/material'
import React, { useState } from 'react'
import { getWeather } from '../services/api'

const Form = ({setResults}) => {

    const [data, setData] = useState({ city: '', country: '' })

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const getWeatherInfo = async () => {
        const result = await getWeather(data.city, data.country)
        setResults(result)
    }

    return (
        <Box style={{
            background: '#445A6F',
            padding: 10,
        }} >
            <InputBase style={{
                color: '#fff',
                marginRight: 20,
                fontSize: 18,
            }}
                name='city'
                onChange={(e) => handleChange(e)}
                placeholder='City' />
            <InputBase style={{
                color: '#fff',
                marginRight: 20,
                fontSize: 18,
            }}
                name='country'
                onChange={(e) => handleChange(e)}
                placeholder='Country' />
            <Button
                style={{
                    background: '#e67e22'
                }}
                disabled={!data.city}
                onClick={() => getWeatherInfo()}
                variant='contained' >Get Weather</Button>
        </Box>
    )
}

export default Form